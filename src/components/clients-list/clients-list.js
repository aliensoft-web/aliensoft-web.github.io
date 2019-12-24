import React from 'react';
import './clients-list.css';

import bitmoji from '../../images/logo_bitmoji.svg'
import cafex from '../../images/logo_cafex.svg'
import chartio from '../../images/logo_chartio.svg'
import descript from '../../images/logo_descript.svg'
import filecoin from '../../images/logo_filecoin.svg'
import final from '../../images/logo_final.svg'
import flyr from '../../images/logo_flyr.svg'
import hanaDark from '../../images/logo_hana-dark.svg'
import humanapi from '../../images/logo_humanapi.svg'
import ink from '../../images/logo_ink.svg'
import inspo from '../../images/logo_inspo.svg'
import june from '../../images/logo_june.svg'
import kyberNetwork from '../../images/logo_kyber-network.svg'
import mobingiDark from '../../images/logo_mobingi-dark.svg'
import osmo from '../../images/logo_osmo.svg'
import truebill from '../../images/logo_truebill.svg'
import wyre from '../../images/logo_wyre.svg'


const ClientsList = () => (
    <div className="column">
        <div className="clients-list clients-list-big">
            <div><img src={bitmoji} alt="bitmoji"/></div>
            <div><img src={cafex} alt="cafex"/></div>
            <div><img src={chartio} alt="chartio"/></div>
            <div><img src={descript} alt="descript"/></div>
            <div><img src={filecoin} alt="filecoin"/></div>
            <div><img src={final} alt="final"/></div>
            <div><img src={flyr} alt="flyr"/></div>
            <div><img src={hanaDark} alt="hana"/></div>
            <div><img src={humanapi} alt="human"/></div>
            <div><img src={ink} alt="ink"/></div>
            <div><img src={inspo} alt="inspo"/></div>
            <div><img src={june} alt="june"/></div>
            <div><img src={kyberNetwork} alt="kyber network"/></div>
            <div><img src={mobingiDark} alt="mobingi"/></div>
            <div><img src={osmo} alt="osmo"/></div>
            <div><img src={truebill} alt="truebill"/></div>
            <div><img src={wyre} alt="wyre"/></div>
        </div>
    </div>
)

export default ClientsList;