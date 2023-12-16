<template>
  <DesktopHeader v-if="$q.screen.width > 1024" />
  <MobileHeader v-else-if="$q.screen.width < 1024" />
</template>
