import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import { withAppContext } from 'test/utils';
import incidentFixture from 'utils/__tests__/fixtures/incident.json';

import IncidentDetailContext from '../../context';
import LocationPreview from '.';

jest.mock('../MapDetail', () => () => <div data-testid="location-preview-map" />);

const onEditLocation = jest.fn();

const renderWithContext = (incident = incidentFixture) =>
  withAppContext(
    <IncidentDetailContext.Provider value={{ incident }}>
      <LocationPreview onEditLocation={onEditLocation} />
    </IncidentDetailContext.Provider>
  );

describe('signals/incident-management/containers/IncidentDetail/components/LocationPreview', () => {
  describe('rendering', () => {
    it('should render correctly', () => {
      const { queryByTestId, queryAllByTestId } = render(renderWithContext());

      expect(queryByTestId('location-preview-button-edit')).toHaveTextContent(/^Locatie wijzigen$/);
      expect(queryAllByTestId('location-preview-map')).toHaveLength(1);
    });
  });

  describe('events', () => {
    it('clicking the edit button should trigger edit the location', () => {
      const { queryByTestId } = render(renderWithContext());

      expect(onEditLocation).not.toHaveBeenCalled();

      act(() => {
        fireEvent.click(queryByTestId('location-preview-button-edit'));
      });

      expect(onEditLocation).toHaveBeenCalled();
    });
  });
});
