// src/components/SearchBox.tsx

import React from 'react';
import { Input, Icon, useTheme2 } from '@grafana/ui';

interface Props {
    value: string;
    onChange: (value: string) => void;
}

export const SearchBox: React.FC<Props> = ({ value, onChange }) => {
    const theme = useTheme2();

    return (
        <div style={{ marginBottom: theme.spacing(2) }}>
            <Input
                placeholder="Dashboard ara (Örn: OEE, SPC)..."
                value={value}
                onChange={(e) => onChange(e.currentTarget.value)}
                prefix={<Icon name="search" color="secondary" />}
            />
        </div>
    );
};
