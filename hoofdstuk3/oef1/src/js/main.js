// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
class AudioSettingsSingleton{
    static instance;

    constructor() {
        if(AudioSettingsSingleton.instance){
            return AudioSettingsSingleton.instance;
        }
        this.volume = 50;
        this.muted = false;

        AudioSettingsSingleton.instance = this;
    }

    setVolume(volume){
        this.volume = Math.max(0, Math.min(100, volume));
    }

    toggleMute(){
        this.muted = !this.muted
    }

    getVolume(){
        return this.volume
    }

    isMuted(){
        return this.muted
    }
}
const AudioSettings = new AudioSettingsSingleton()

document.getElementById('aud_volume')?.addEventListener('input', (e) => {
    AudioSettings.setVolume(e.target.value)
})

document.getElementById('aud_btn_mute')?.addEventListener('click', () => {
    AudioSettings.toggleMute()
})

document.getElementById('aud_btn_show')?.addEventListener('click', () => {
    document.getElementById('aud_out_volume').textContent = AudioSettings.getVolume()
    document.getElementById('aud_out_muted').textContent = AudioSettings.isMuted()
})