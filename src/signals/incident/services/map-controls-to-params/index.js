import moment from 'moment';
import forEach from 'lodash.foreach';
import set from 'lodash.set';
import isFunction from 'lodash.isfunction';
import isObject from 'lodash.isobject';

const convertValue = (value) => {
  if (value === 0) {
    return 0;
  }
  if (value === true) {
    return 'ja';
  }
  if (value === false) {
    return 'nee';
  }
  return value;
};

const mapControlsToParams = (incident, wizard) => {
  let date;

  if (incident.datetime && incident.datetime.id === 'Nu') {
    date = moment();
  } else if (incident.incident_date) {
    const time = `${incident.incident_time_hours}:${incident.incident_time_minutes}`;
    date = moment(`${incident.incident_date && incident.incident_date.id === 'Vandaag' ? moment().format('YYYY-MM-DD') : incident.incident_date} ${time}`, 'YYYY-MM-DD HH:mm');
  }

  const params = {
    reporter: {},
    status: {
      state: 'm',
      extra_properties: {}
    }
  };

  if (date) {
    params.incident_date_start = date.format();
  }

  const category_url = incident && incident.subcategory_link ? new URL(incident.subcategory_link).pathname : '';
  const map = [];
  let mapMerge = {};
  forEach(wizard, (step) => {
    let controls = {};
    if (step.formFactory && isFunction(step.formFactory)) {
      const form = step.formFactory(incident);
      controls = form && form.controls;
    } else {
      controls = step.form && step.form.controls;
    }
    forEach(controls, (control, name) => {
      const value = incident[name];
      const meta = control.meta;

      if (meta && meta.path) {
        map.push({
          path: meta.path,
          value
        });
      }

      if (meta && meta.isVisible && meta.pathMerge) {
        const answer = convertValue(value);
        if (answer || answer === 0) {
          mapMerge = {
            ...mapMerge,
            [meta.pathMerge]: [
              ...(mapMerge[meta.pathMerge] || []),
              {
                id: name,
                label: meta.label,
                category_url,
                answer
              }
            ]
          };
        }
      }
    });
  });

  forEach(map, (item) => {
    let itemValue = convertValue(item.value);
    if (itemValue || itemValue === 0) {
      if (isObject(itemValue) && itemValue.id) {
        itemValue = itemValue.id;
      }

      set(params, item.path, itemValue);
    }
  });

  forEach(mapMerge, (value, key) => {
    set(params, key, value);
  });

  return params;
};

export default mapControlsToParams;
