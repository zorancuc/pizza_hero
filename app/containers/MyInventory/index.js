import React from 'react';
import { Helmet } from 'react-helmet';

export default function MyInventory() {
  return (
    <div>
      <Helmet>
        <title>My Inventory</title>
        <meta
          name="description"
          content="Pizza Heroes application my inventory page"
        />
      </Helmet>
      MyInventory
    </div>
  );
}
