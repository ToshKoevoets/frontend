import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
// import { Row, Column } from '@datapunt/asc-ui';

import { makeSelectAllFilters } from '../IncidentOverviewPage/selectors';

import FilterItem from './components/FilterItem';

export const MyFilters = ({ allFilters }) => (
  <div className="my-filters">
    {allFilters && allFilters.map((filter) => (
      <FilterItem
        key={filter._links.self.href}
        filter={filter}
      />
    ))}
  </div>
);

MyFilters.propTypes = {
  allFilters: PropTypes.array.isRequired,
  // onRemoveFilter: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  allFilters: makeSelectAllFilters,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      // onRemoveFilter: filterCleared,
    },
    dispatch,
  );

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(MyFilters);
