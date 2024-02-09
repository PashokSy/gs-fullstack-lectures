import React, {useEffect, useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {useSelector} from 'react-redux';

import StatsItem from './StatsItem';
import Footer from '../../../commons/footer/Footer';

const terms = {
  message: 'The data were fetched successfully.',
  data: {
    personnel_units: {
      title: 'Personnel units',
      icon: 'https://russianwarship.rip/images/icons/icon-people.svg',
    },
    tanks: {
      title: 'Tanks',
      icon: 'https://russianwarship.rip/images/icons/icon-tank.svg',
    },
    armoured_fighting_vehicles: {
      title: 'Armoured fighting vehicles',
      icon: 'https://russianwarship.rip/images/icons/icon-bbm.svg',
    },
    artillery_systems: {
      title: 'Artillery systems',
      icon: 'https://russianwarship.rip/images/icons/icon-art.svg',
    },
    mlrs: {
      title: 'Multiple Launch Rocket System',
      icon: 'https://russianwarship.rip/images/icons/icon-rszv.svg',
    },
    aa_warfare_systems: {
      title: 'Anti-aircraft warfare systems',
      icon: 'https://russianwarship.rip/images/icons/icon-ppo.svg',
    },
    planes: {
      title: 'Planes',
      icon: 'https://russianwarship.rip/images/icons/icon-plane.svg',
    },
    helicopters: {
      title: 'Helicopters',
      icon: 'https://russianwarship.rip/images/icons/icon-helicopter.svg',
    },
    vehicles_fuel_tanks: {
      title: 'Vehicles and fuel tanks',
      icon: 'https://russianwarship.rip/images/icons/icon-auto.svg',
    },
    warships_cutters: {
      title: 'Warships and cutters',
      icon: 'https://russianwarship.rip/images/icons/icon-ship.svg',
    },
    cruise_missiles: {
      title: 'Cruise missiles',
      icon: 'https://russianwarship.rip/images/icons/icon-rocket.svg',
    },
    uav_systems: {
      title: 'Unmanned aerial vehicle systems',
      icon: 'https://russianwarship.rip/images/icons/icon-bpla.svg',
    },
    special_military_equip: {
      title: 'Special military equipment',
      icon: 'https://russianwarship.rip/images/icons/icon-special.svg',
    },
    atgm_srbm_systems: {
      title:
        'Anti-tank guided missile and short-range ballistic missile systems',
      icon: 'https://russianwarship.rip/images/icons/icon-trk.svg',
    },
    submarines: {
      title: 'Submarines',
      icon: 'https://russianwarship.rip/images/icons/icon-submarine.svg',
    },
  },
};

const Stats = () => {
  const stats = useSelector(state => state.stats[0]);

  return (
    <ScrollView>
      <StatsItem
        statsAll={stats?.data?.stats?.personnel_units}
        statsDay={stats?.data?.increase?.personnel_units}
        terms={terms.data.personnel_units}
      />
      <StatsItem
        statsAll={stats?.data?.stats?.tanks}
        statsDay={stats?.data?.increase?.tanks}
        terms={terms.data.tanks}
      />
      <StatsItem
        statsAll={stats?.data?.stats?.armoured_fighting_vehicles}
        statsDay={stats?.data?.increase?.armoured_fighting_vehicles}
        terms={terms.data.armoured_fighting_vehicles}
      />
      <StatsItem
        statsAll={stats?.data?.stats?.artillery_systems}
        statsDay={stats?.data?.increase?.artillery_systems}
        terms={terms.data.artillery_systems}
      />
      <StatsItem
        statsAll={stats?.data?.stats?.mlrs}
        statsDay={stats?.data?.increase?.mlrs}
        terms={terms.data.mlrs}
      />
      <StatsItem
        statsAll={stats?.data?.stats?.aa_warfare_systems}
        statsDay={stats?.data?.increase?.aa_warfare_systems}
        terms={terms.data.aa_warfare_systems}
      />
      <StatsItem
        statsAll={stats?.data?.stats?.planes}
        statsDay={stats?.data?.increase?.planes}
        terms={terms.data.planes}
      />
      <StatsItem
        statsAll={stats?.data?.stats?.helicopters}
        statsDay={stats?.data?.increase?.helicopters}
        terms={terms.data.helicopters}
      />
      <StatsItem
        statsAll={stats?.data?.stats?.vehicles_fuel_tanks}
        statsDay={stats?.data?.increase?.vehicles_fuel_tanks}
        terms={terms.data.vehicles_fuel_tanks}
      />
      <StatsItem
        statsAll={stats?.data?.stats?.warships_cutters}
        statsDay={stats?.data?.increase?.warships_cutters}
        terms={terms.data.warships_cutters}
      />
      <StatsItem
        statsAll={stats?.data?.stats?.cruise_missiles}
        statsDay={stats?.data?.increase?.cruise_missiles}
        terms={terms.data.cruise_missiles}
      />
      <StatsItem
        statsAll={stats?.data?.stats?.uav_systems}
        statsDay={stats?.data?.increase?.uav_systems}
        terms={terms.data.uav_systems}
      />
      <StatsItem
        statsAll={stats?.data?.stats?.special_military_equip}
        statsDay={stats?.data?.increase?.special_military_equip}
        terms={terms.data.special_military_equip}
      />
      <StatsItem
        statsAll={stats?.data?.stats?.atgm_srbm_systems}
        statsDay={stats?.data?.increase?.atgm_srbm_systems}
        terms={terms.data.atgm_srbm_systems}
      />
      <StatsItem
        statsAll={stats?.data?.stats?.submarines}
        statsDay={stats?.data?.increase?.submarines}
        terms={terms.data.submarines}
      />
      <Footer />
    </ScrollView>
  );
};

export default Stats;
