import React from 'react';

const IntroScreen = ({ onStartGame }) => {
    return (
        <div className="intro-screen">
            <h1>Dompet Sehat</h1>
            <p>
                Selamat datang! Game ini adalah simulasi pengelolaan keuangan. Kamu akan menghadapi pilihan antara <strong>Kebutuhan</strong> dan <strong>Keinginan</strong>.
            </p>
            <p>
                <strong>Kebutuhan:</strong> Melunasi tagihan akan menstabilkan keuanganmu.
            </p>
            <p>
                <strong>Keinginan:</strong> Meningkatkan kebahagiaan sesaat, tapi bisa menjadi jebakan keuangan.
            </p>
            <p>
                Jaga status <strong>Uang, Tabungan, Kebahagiaan,</strong> dan <strong>Kesehatan</strong> kamu untuk bertahan sebulan!
            </p>
            <button className="start-button" onClick={onStartGame}>
                Mulai
            </button>
        </div>
    );
};

export default IntroScreen;