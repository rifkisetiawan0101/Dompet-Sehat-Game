import React from 'react';

// Komponen Status Item yang sudah dirancang untuk animasi
const StatusItem = ({ label, value, change }) => {
    const hasChange = change !== 0;
    const changeClass = change > 0 ? 'stat-increase' : 'stat-decrease';
    const formattedChange = (change > 0 ? '+ ' : '') + new Intl.NumberFormat('id-ID').format(change);

    const itemClasses = `status-item ${hasChange ? 'preview-active' : ''}`;

    return (
        <div className={itemClasses}>
            <div className="status-content">
                    <span className="status-label">{label}</span>
                    <span className="status-value">{value}</span>
            </div>
            <div className="status-change-preview">
                <span className={changeClass}>
                    {hasChange && formattedChange}
                </span>
            </div>
        </div>
    );
};

const StatusBar = ({ stats, hoveredChoice }) => {
    const formatRupiah = (number) => {
        const value = Math.max(0, number);
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(value);
    };

    const getChange = (statKey) => hoveredChoice ? hoveredChoice[statKey] || 0 : 0;

    return (
        <div className="status-bar">
            <StatusItem label="HARI KE-" value={stats.day} change={getChange('day')} />
            <StatusItem label="UANG (💵)" value={formatRupiah(stats.cash)} change={getChange('cash')} />
            <StatusItem label="TABUNGAN (💰)" value={formatRupiah(stats.savings)} change={getChange('savings')} />
            <StatusItem label="TAGIHAN (💸)" value={formatRupiah(stats.bills)} change={getChange('bills')} />
            <StatusItem label="KEBAHAGIAAN (😊)" value={stats.happiness} change={getChange('happiness')} />
            <StatusItem label="KESEHATAN (❤️)" value={stats.health} change={getChange('health')} />
        </div>
    );
};

export default StatusBar;