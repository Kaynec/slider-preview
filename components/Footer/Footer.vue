<template>
  <DesktopFooter v-if="$q.screen.width > 1024" />
  <MobileFooter v-else-if="$q.screen.width < 1024" />
</template>
