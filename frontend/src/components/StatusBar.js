import React from 'react';

// Komponen kecil untuk setiap item status
const StatusItem = ({ label, value }) => (
    <div className="status-item">
            <span className="status-label">{label}</span>
            <span className="status-value">{value}</span>
    </div>
);

const StatusBar = ({ stats }) => {
    const formatRupiah = (number) => {
        // Pastikan nilai tagihan tidak negatif saat ditampilkan
        const value = Math.max(0, number);
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(value);
    };

    return (
        <div className="status-bar">
            <StatusItem label="HARI KE-" value={stats.day} />
            <StatusItem label="UANG (💵)" value={formatRupiah(stats.cash)} />
            <StatusItem label="TABUNGAN (💰)" value={formatRupiah(stats.savings)} />
            <StatusItem label="TAGIHAN (💸)" value={formatRupiah(stats.bills)} />
            <StatusItem label="KEBAHAGIAAN (😊)" value={stats.happiness} />
            <StatusItem label="KESEHATAN (❤️)" value={stats.health} />
        </div>
    );
};

export default StatusBar;