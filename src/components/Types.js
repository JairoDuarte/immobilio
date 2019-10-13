import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { TYPES } from '@/constants';

function Country({ updateItem, types }) {
  return (
    <>
      <Dropdown
        multiple
        selection
        value={types}
        search
        onChange={(e, { value }) => updateItem(value)}
        options={TYPES}
        placeholder="Filtre par type"
        renderLabel={label => ({ color: 'green', content: label.text, icon: 'check' })}
      />
    </>
  );
}

export default Country;
