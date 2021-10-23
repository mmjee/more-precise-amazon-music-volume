// ==UserScript==
// @name        Amazon Music Stepper Fix
// @namespace   Violentmonkey Scripts
// @match       https://music.amazon.in/*
// @grant       none
// @version     1.0
// @author      -
// @description 9/29/2021, 9:12:29 AM
// ==/UserScript==
document.addEventListener('keydown', (ev) => {
    if (ev.key.toLowerCase() !== 'v' || !ev.altKey) {
        return
    }

    ev.preventDefault()
    console.log('MPAMV Called into action!')

    const el = document.querySelector('#volume-range')
    if (!el) {
        console.log('No volume slider found...')
        return
    }

    el.setAttribute('step', '0.01')
})
