<template lang='pug'>
  .widget-dual.widget-block
    AppIcon.icon.mr-2(:name='icon')
    .widget-interactive
      SelectItem(
        name='desktop'
        :items='desktops'
        :value='desktop'
        :callback='changeDE'
      )
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'DEChoiceWidget',  
  computed: {
    ...mapState('settings', ['desktop', 'desktops']),
    ...mapGetters('settings', ['getCurrentDesktop']),
    icon() {
      let key = this.getCurrentDesktop.key.toLowerCase()

      if (key.indexOf('plasma') > -1 || key.indexOf('kde') > -1) {
        return 'kde'
      } if (key.indexOf('gnome') > -1) {
        return 'gnome'
      } if (key.indexOf('xfce') > -1) {
        return 'xfce'
      } if (key.indexOf('unity') > -1 || key.indexOf('ubuntu') > -1) {
        return 'ubuntu'
      } if (key.indexOf('dde') > -1 || key.indexOf('deepin') > -1) {
        return 'deepin'
      } if (key.indexOf('kodi') > -1 || key.indexOf('kodi') > -1) {
        return 'kodi'
      } if (key.indexOf('lxde') > -1 || key.indexOf('lxqt') > -1) {
        return 'lxde'
      } if (key.indexOf('openbox') > -1 || key.indexOf('openbox') > -1) {
        return 'openbox'
      } if (key.indexOf('pantheon') > -1 || key.indexOf('elementary') > -1) {
        return 'elementary'
      } if (key.indexOf('mate') > -1) {
        return 'mate'
      } if (key.indexOf('cinnamon') > -1 || key.indexOf('mint') > -1) {
        return 'cinnamon'
      } if (key.indexOf('enlightenment') > -1 || (key.length === 3 && /e[1-9]{2}/g.test(key))) {
        return 'enlightenment';
      } if (key.indexOf('i3') > -1) {
        return 'i3'
      } if (key.indexOf('xmonad') > -1) {
        return 'xmonad'
      } if (key.indexOf('budgie') > -1 || key.indexOf('solus') > -1) {
        return 'budgie'
      } else {
        return 'love'
      }
    }
  },
  methods: {
    ...mapActions('settings', ['changeSettings']),
    changeDE(item) {
      this.changeSettings({ key: 'desktop', value: item.name })
    }
  }
};
</script>

<style lang='stylus'></style>
