import React, { useState } from 'react';
import Button, { ThemeButton } from '../../../shared/ui/Button/Button';
import './Sidebar.css';

function Sidebar(): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = (): void => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={`Sidebar ${collapsed ? 'collapsed' : ''} `}>
      <Button type="button" theme={ThemeButton.SECONDARY} onClick={onToggle}>
        toggle
      </Button>
    </div>
  );
}
export default Sidebar;
