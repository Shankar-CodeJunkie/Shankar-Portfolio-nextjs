'use client'
import Image from 'next/image';
import { Button, Grid, Content, Theme } from '@carbon/react';
import AppHeader from '@/components/Header/page';
import { useState } from 'react';
import HomePage from '@/components/HomePage/page';
import React, {useEffect} from 'react';

export default function Profile() {
    const [appTheme, modifyAppTheme] = useState('white');
    const sendDataToParent = (value) => {
        modifyAppTheme(value);
    };

    return (
        <Theme theme={appTheme}>

            <AppHeader sendDataToParent={sendDataToParent} />

            <HomePage />

        </Theme>
    )
}