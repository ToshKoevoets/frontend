import React from 'react';
import { Heading } from '@amsterdam/asc-ui';

import IncidentNavigation from '../components/IncidentNavigation';
import FormComponents from '../components/form';

export default {
  label: 'Bedankt!',
  form: {
    controls: {
      confirmation_message: {
        meta: {
          value: 'Uw melding is bij ons bekend onder nummer: {incident.id}.',
          valueAuthenticated:
            'Uw melding is bij ons bekend onder nummer: [{incident.id}](/manage/incident/{incident.id}).',
        },
        render: FormComponents.PlainText,
      },
      handling_message: {
        meta: {
          title: 'Wat doen we met uw melding?',
          key: 'incident.handling_message',
        },
        render: FormComponents.HandlingMessage,
      },
      next_incident_action: {
        meta: {
          title: 'Wilt u nog een andere melding doen?',
          label: 'Doe een melding',
          href: '/',
        },
        render: FormComponents.LinkButton,
      },
      $field_0: {
        isStatic: false,
        render: IncidentNavigation,
      },
    },
  },
};
