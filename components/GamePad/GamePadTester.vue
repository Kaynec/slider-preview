<template>
  <QCard
    class="h-70vh min-h-140 max-h-240 shadow-0 custom flex w-full justify-center items-center"
  >
    <template v-if="connected">
      <!-- Detail About Current Controller -->
      <div class="w-20% h-full absolute start-0">
        <div class="grid grid-cols-2 content-center h-full gap-y-xl">
          <div class="col-span-2 flex justify-center">
            <!-- <svg
              width="191"
              height="203"
              viewBox="0 0 191 203"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="96.5"
                cy="108.5"
                r="94.5"
                fill="#05CD99"
                fill-opacity="0.1"
              />
              <circle
                cx="96.5"
                cy="108.15"
                r="78"
                stroke="#383838"
                stroke-width="3"
              />
              <path
                d="M10 107.65H184"
                stroke="#383838"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M98.5 20.6496L98.5 194.65"
                stroke="#383838"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M98.427 110.249C96.9259 111.17 95.053 109.842 95.4263 108.12L116.511 10.9059C116.769 9.71552 118.022 9.0304 119.164 9.45578L144.244 18.8025C144.718 18.9791 145.107 19.3285 145.333 19.7804L148.103 25.3066C148.152 25.4041 148.193 25.5054 148.225 25.6095L150.591 33.2233C150.719 33.6364 150.978 33.9967 151.328 34.2503L158.1 39.1502C158.299 39.2941 158.522 39.4001 158.76 39.463L173.38 43.3395C173.956 43.4922 174.434 43.8938 174.683 44.4348L177.246 49.9885C177.397 50.3146 177.632 50.5942 177.928 50.7979L183.583 54.6905C184.775 55.5108 184.728 57.2858 183.495 58.0425L98.427 110.249Z"
                fill="url(#paint0_linear_302_10799)"
              />
              <path
                d="M100.33 108.255C98.7395 109.55 96.4631 107.897 97.2021 105.984L131.981 15.9485C132.413 14.8288 133.728 14.3397 134.787 14.9042L138.472 16.8679C138.816 17.0516 139.1 17.3322 139.287 17.6751L141.915 22.4932C141.971 22.5972 142.019 22.706 142.056 22.8184L144.258 29.4246C144.414 29.8914 144.736 30.2844 145.163 30.5286L151.133 33.94C151.375 34.0781 151.643 34.1643 151.92 34.1929L164.908 35.5365C165.588 35.6069 166.185 36.0199 166.491 36.6315L168.716 41.0811C168.901 41.4509 169.196 41.7543 169.56 41.9496L174.293 44.485C175.551 45.1594 175.718 46.8977 174.611 47.7991L100.33 108.255Z"
                fill="url(#paint1_linear_302_10799)"
              />
              <path
                d="M99.7203 107.183C100.222 108.871 98.4537 110.336 96.8877 109.53L8.44266 64.0035C7.35962 63.446 7.02224 62.058 7.72855 61.0656L23.2481 39.2589C23.5412 38.847 23.9795 38.5614 24.4747 38.4596L30.5294 37.2144C30.6362 37.1925 30.7446 37.1793 30.8535 37.175L38.8202 36.8609C39.2524 36.8438 39.6674 36.6871 40.003 36.4143L46.4886 31.1414C46.6791 30.9866 46.8394 30.798 46.9616 30.585L54.49 17.4662C54.7866 16.9495 55.2981 16.5918 55.8852 16.4907L61.913 15.4527C62.267 15.3917 62.5981 15.2365 62.8714 15.0035L68.0949 10.5488C69.1957 9.61011 70.8982 10.1145 71.31 11.5013L99.7203 107.183Z"
                fill="url(#paint2_linear_302_10799)"
              />
              <path
                d="M98.2863 104.829C99.1251 106.7 96.939 108.471 95.2822 107.262L17.3165 50.366C16.3469 49.6584 16.2146 48.2621 17.0341 47.385L19.8844 44.3343C20.1511 44.0488 20.4955 43.8477 20.8752 43.7558L26.2092 42.4644C26.3244 42.4365 26.4418 42.4189 26.56 42.4118L33.511 41.9946C34.0022 41.9651 34.4653 41.7555 34.8117 41.4061L39.652 36.5224C39.848 36.3247 40.0005 36.0883 40.0998 35.8282L44.7592 23.6305C45.0032 22.9917 45.5567 22.5219 46.2266 22.3848L51.1004 21.3874C51.5055 21.3045 51.8749 21.0981 52.1578 20.7966L55.8317 16.8816C56.8089 15.8403 58.5312 16.1291 59.1152 17.4322L98.2863 104.829Z"
                fill="url(#paint3_linear_302_10799)"
              />
              <rect
                x="94"
                y="103"
                width="9"
                height="9"
                rx="4.5"
                fill="#979797"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_302_10799"
                  x1="94.4324"
                  y1="112.699"
                  x2="184.751"
                  y2="9.68708"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#DB162F" stop-opacity="0.57" />
                  <stop offset="0.9999" stop-color="#DB162F" stop-opacity="0" />
                  <stop offset="1" stop-color="#DB162F" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_302_10799"
                  x1="94.4871"
                  y1="113.01"
                  x2="174.993"
                  y2="2.15973"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#007AFF" stop-opacity="0.7" />
                  <stop offset="1" stop-color="#007AFF" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_302_10799"
                  x1="101.053"
                  y1="111.675"
                  x2="24.9272"
                  y2="-2.22715"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#DB162F" stop-opacity="0.57" />
                  <stop offset="0.9999" stop-color="#DB162F" stop-opacity="0" />
                  <stop offset="1" stop-color="#DB162F" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_302_10799"
                  x1="101.367"
                  y1="111.703"
                  x2="15.1299"
                  y2="5.2505"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#007AFF" stop-opacity="0.7" />
                  <stop offset="1" stop-color="#007AFF" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg> -->
            <p>
              انحراف معیار :
              <span class="text-primary">
                {{
                  calculateDeadzone(gamepad.axes[0], gamepad.axes[1])
                    .xDeflection
                }}
                %
              </span>
            </p>
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
</style>
