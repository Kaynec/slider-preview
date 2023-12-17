<template>
  <QCard
    class="h-70vh min-h-140 max-h-240 shadow-0 custom flex w-full justify-center items-center relative"
  >
    <template v-if="connected">
      <!-- Detail About Current Controller -->
      <div class="w-20% h-full absolute start-0">
        <div class="grid grid-cols-2 content-start h-full gap-y-xl">
          <div
            class="col-span-2 flex flex-col items-center gap-3 justify-center"
          >
            <div
              class="mx-auto flex items-center !min-h-50 justify-center py-xl !overflow-visible"
            >
              <svg class="!overflow-visible">
                <g
                  overflow-visible
                  transform="translate(150 75) scale(0.95, 0.95)"
                >
                  <circle
                    cx="0"
                    cy="0"
                    r="78.5"
                    fill="none"
                    stroke="gray"
                    stroke-width="1"
                  ></circle>
                  <line
                    x1="0"
                    y1="-78.5"
                    x2="0"
                    y2="78.5"
                    stroke="gray"
                    stroke-width="1"
                  ></line>
                  <line
                    x1="-78.5"
                    y1="0"
                    x2="78.5"
                    y2="0"
                    stroke="gray"
                    stroke-width="1"
                  ></line>
                  <line
                    x1="0"
                    y1="0"
                    :x2="axesMapping.rightAxesX * (100 - 22)"
                    :y2="axesMapping.rightAxesY * (100 - 22)"
                    :stroke="getCssVar('primary')!"
                    stroke-width="2"
                  ></line>
                  <circle
                    :cx="axesMapping.rightAxesX * (100 - 22)"
                    :cy="axesMapping.rightAxesY * (100 - 22)"
                    r="4"
                    :fill="getCssVar('primary')!"
                  ></circle>
                </g>
              </svg>
            </div>
          </div>

          <p class="flex flex-col text-text-secondary text-center">
            index: <span class="text-text-primary">{{ gamepad.index }}</span>
          </p>

          <p class="flex flex-col text-text-secondary text-center">
            vibration:
            <span class="text-text-primary">
              {{ supportsVibration }}
            </span>
          </p>
          <p class="flex flex-col text-text-secondary text-center col-span-2">
            timestamp:
            <span class="text-text-primary">
              {{ gamepad.timestamp }}
            </span>
          </p>
        </div>
      </div>
      <!-- LEft Side Details -->
      <div class="w-20% h-full absolute end-0">
        <div class="grid grid-cols-2 content-start h-full gap-y-xl">
          <div
            class="col-span-2 flex flex-col items-center gap-3 justify-center"
          >
            <div
              class="mx-auto flex items-center !min-h-50 justify-center py-xl !overflow-visible"
            >
              <svg class="!overflow-visible">
                <g
                  overflow-visible
                  transform="translate(150 75) scale(0.95, 0.95)"
                >
                  <circle
                    cx="0"
                    cy="0"
                    r="78.5"
                    fill="none"
                    stroke="gray"
                    stroke-width="1"
                  ></circle>
                  <line
                    x1="0"
                    y1="-78.5"
                    x2="0"
                    y2="78.5"
                    stroke="gray"
                    stroke-width="1"
                  ></line>
                  <line
                    x1="-78.5"
                    y1="0"
                    x2="78.5"
                    y2="0"
                    stroke="gray"
                    stroke-width="1"
                  ></line>
                  <line
                    x1="0"
                    y1="0"
                    :x2="axesMapping.leftAxesX * (100 - 22)"
                    :y2="axesMapping.leftAxesY * (100 - 22)"
                    :stroke="getCssVar('primary')!"
                    stroke-width="2"
                  ></line>
                  <circle
                    :cx="axesMapping.leftAxesX * (100 - 22)"
                    :cy="axesMapping.leftAxesY * (100 - 22)"
                    r="4"
                    :fill="getCssVar('primary')!"
                  ></circle>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="flex flex-col justify-center items-center">
        <span class="text-center"> {{ gamepad.id }} </span>

        <Ps5Skin
          :connected="connected"
          :buttonMapping="buttonMapping"
          :axesMapping="axesMapping"
          :AxisMultiplier="AxisMultiplier"
          :fillColor="fillColor"
          :isActive="isActive"
        />
        <div class="mx-auto">
          <PrimaryButton
            class="btn !rounded-xl max-w-45 w-full"
            :disabled="!supportsVibration"
            @click="vibrate"
          >
            تست ویبره
          </PrimaryButton>
        </div>
      </div>
    </template>

    <div
      class="h-full flex flex-col items-center justify-center"
      v-if="!connected"
    >
      <QSpinner size="xl" />
      <span>
        برای شروع تست اتصال دسته خود را متصل کرده و شروع به فشار دادن دکمه ها
        کنید
      </span>
    </div>
  </QCard>
</template>

<script setup lang="ts">
import { useGamepad } from '@vueuse/core'
import { getCssVar } from 'quasar'
const { isSupported, gamepads, isActive, onDisconnected, onConnected } =
  useGamepad()

const connected = ref(false)

onConnected(() => (connected.value = true))
onDisconnected(() => (connected.value = false))

const gamepad = computed(() => gamepads.value[0])

const fillColor = 'red'

const buttonMapping = computed(() => ({
  bottomButton: gamepad.value.buttons[0],
  rightButton: gamepad.value.buttons[1],
  leftButton: gamepad.value.buttons[2],
  topButton: gamepad.value.buttons[3],
  leftBumper: gamepad.value.buttons[4],
  rightBumper: gamepad.value.buttons[5],
  leftTrigger: gamepad.value.buttons[6],
  rightTrigger: gamepad.value.buttons[7],
  optionsButton: gamepad.value.buttons[8],
  startButton: gamepad.value.buttons[9],
  leftAnalogButton: gamepad.value.buttons[10],
  rightAnalogButton: gamepad.value.buttons[11],
  DpadUp: gamepad.value.buttons[12],
  DpadDown: gamepad.value.buttons[13],
  DpadLeft: gamepad.value.buttons[14],
  DpadRight: gamepad.value.buttons[15],
  power: gamepad.value.buttons[16]
}))

const axesMapping = computed(() => ({
  leftAxesX: gamepad.value.axes[0],
  leftAxesY: gamepad.value.axes[1],
  rightAxesX: gamepad.value.axes[2],
  rightAxesY: gamepad.value.axes[3]
}))

const AxisMultiplier = 20

const supportsVibration = computed(
  () => gamepad.value?.hapticActuators.length > 0
)
function vibrate() {
  if (supportsVibration.value) {
    const actuator: any = gamepad.value.hapticActuators[0]
    actuator.playEffect('dual-rumble', {
      startDelay: 0,
      duration: 1000,
      weakMagnitude: 1,
      strongMagnitude: 1
    })
  }
}

const calculateDeadzone = (x: number, y: number, deadzone: number = 0.1) => {
  let xDeflection = 0,
    yDeflection = 0
  if (x !== 0 || y !== 0) {
    const distRange = 1 - deadzone
    const dist = distRange * Math.sqrt(x * x + y * y) + deadzone
    const angle = Math.atan2(x, y)
    xDeflection = dist * Math.sin(angle)
    xDeflection = Math.min(1, Math.max(-1, xDeflection))
    yDeflection = dist * Math.cos(angle)
    yDeflection = Math.min(1, Math.max(-1, yDeflection))
  }
  return { xDeflection, yDeflection }
}
</script>

<style scoped>
.custom {
  background-image: url('../../assets/controller-card-right-img.svg'),
    url('../../assets/controller-card-left-img.svg');
  background-position: left, right;
  background-repeat: no-repeat, no-repeat;
  position: relative;
  background-size: contain;
}

@media screen and (max-width: 1024px) {
  .custom {
    background-image: none;
  }
}
.css-1jxoetp {
  position: relative;
  height: 157px;
  width: 157px;
  display: inline-block;
  border: 10px solid rgba(0, 0, 0, 0);
}
</style>
