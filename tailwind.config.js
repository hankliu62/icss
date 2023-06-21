const { keyframes } = require('tailwindcss/defaultTheme');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        // Brand Color
        primary: '#FFC401', // 主题色
        black: '#000000',
        white: '#FFFFFF',
        'black-0.8': 'rgba(0, 0, 0, 0.8)',
        'black-0.6': 'rgba(0, 0, 0, 0.6)',
        'white-0.08': 'rgba(255, 255, 255, 0.08)',
        'white-0.2': 'rgba(255, 255, 255, 0.2)',
        'white-0.3': 'rgba(255, 255, 255, 0.3)',
        'white-0.8': 'rgba(255, 255, 255, 0.8)',
        'gray-333': '#333333',
        // Neutral color
        // 线条 Line
        'line-4': '#86909C', // 重/按钮描边
        'line-3': '#C9CDD4', // 深/悬浮
        'line-2': '#E5E6EB', // 一般
        'line-1': '#F2F3F5', // 浅
        // 填充 Fill
        'fill-6': '#4E5969', // 强调/图标/特殊场景
        'fill-5': '#C9CDD4', // 重/特殊场景
        'fill-4': '#E5E6EB', // 深/灰底悬浮
        'fill-3': '#F2F3F5', // 一般/常规/白底悬浮
        'fill-2': '#F7F8FA', // 浅/禁用
        'fill-1': '#FFFFFF', // 白色
        // 文字 Text
        'text-5': '#1D2129', // 强调/正文标题
        'text-4': '#4E5969', // 次强调/正文标题
        'text-3': '#86909C', // 次要信息
        'text-2': '#C9CDD4', // 置灰信息
        'text-1': '#FFFFFF', // 纯白文字
        // Functional color
        // 成功 Success
        'success-6': '#00B42A', // 常规
        'success-5': '#23C343', // 悬浮
        'success-4': '#009A29', // 点击
        'success-3': '#7BE188', // 禁用
        'success-2': '#AFF0B5', // 特殊场景
        'success-1': '#E8FFEA', // 浅色背景
        // 提示 Warning
        'warning-6': '#FF7D00', // 常规
        'warning-5': '#FF9A2E', // 悬浮
        'warning-4': '#D25F00', // 点击
        'warning-3': '#FFCF8B', // 禁用
        'warning-2': '#FFF7E8', // 特殊场景
        'warning-1': '#FFF7E8', // 浅色背景
        // 错误 Error
        'error-6': '#F53F3F', // 常规
        'error-5': '#F76560', // 悬浮
        'error-4': '#CB2634', // 点击
        'error-3': '#FBACA3', // 禁用
        'error-2': '#FDCDC5', // 特殊场景
        'error-1': '#FFECE8', // 浅色背景
      },
      spacing: {
        ...new Array(1000).fill(1).reduce((cur, _, index) => {
          cur[`${index + 1}px`] = `${index + 1}px`;
          return cur;
        }, {}),
        '1100px': '1100px',
        '1250px': '1250px',
        0.72: '0.18rem',
        1.12: '0.28rem',
        1.2: '0.3rem',
        1.4: '0.35rem',
        1.6: '0.4rem',
        1.75: '0.35rem',
        3.2: '0.8rem',
        5.04: '1.26rem',
        6.32: '1.58rem',
        6.4: '1.6rem',
        6.72: '1.68rem',
        7.12: '1.78rem',
        7.28: '1.82rem',
        7.44: '1.86rem',
        8.88: '2.22rem',
        9.2: '2.3rem',
        10.548: '2.637rem',
        10.4: '2.6rem',
        10.88: '2.72rem',
        13.4: '3.35rem',
        13.8: '3.45rem',
      },
      width: {
        'article-card': 'calc(100% - 16px)',
        'm-menu': 'calc(100vw - 20px)',
      },
      height: {
        // 首页首屏高度定义
        'first-view': 'calc(100vh + 256px)',
        'first-view-m': 'calc(100vh + 180px)',
      },
      maxWidth: {
        '1100px': '1100px',
        '1250px': '1250px',
      },
      minWidth: {
        '1350px': '1350px',
      },
      maxHeight: {
        '280px': '280px',
      },
      minHeight: {
        '130px': '130px',
      },
      borderWidth: {
        '10px': '10px',
        '16px': '16px',
        0.48: '0.12rem',
      },
      lineHeight: {
        ...new Array(10).fill(1).reduce((cur, _, index) => {
          cur[`${(index + 1) * 10 + 100}`] = `${(index + 1) * 10 + 100}%`;
          return cur;
        }, {}),
      },
      margin: {
        '-0.8': '-0.2rem',
        '-0.2': '-0.05rem',
        0.32: '0.08rem',
        0.36: '0.09rem',
        0.4: '0.1rem',
        0.48: '0.12rem',
        0.64: '0.16rem',
        0.8: '0.2rem',
        0.84: '0.21rem',
        0.96: '0.24rem',
        1: '0.25rem',
        1.28: '0.32rem',
        1.6: '0.4rem',
      },
      padding: {
        0.16: '0.04rem',
        0.2: '0.05rem',
        0.6: '0.15rem',
        0.64: '0.16rem',
        0.8: '0.2rem',
        0.88: '0.22rem',
        0.96: '0.24rem',
        1.28: '0.32rem',
      },
      inset: {
        // top|bottom|left|right
        '60px': '60px',
        '100px': '100px',
        1.2: '0.3rem',
        1.6: '0.4rem',
        'tip-arrow': 'calc(50vw - 24px)',
      },
      zIndex: {
        ...new Array(9).fill(1).reduce((cur, _, index) => {
          cur[`${index + 1}`] = `${index + 1}`;
          return cur;
        }, {}),
        99: '99',
      },
      backgroundImage: {
        'br-black-white-split': 'linear-gradient(45deg, #000 0, #000 50%, #fff 50%)',
        'b-black-white-split': 'linear-gradient(180deg, #000 0, #000 50%, #fff 50%)'
      },
      keyframes: {
        'horizontal-bounce': {
          '0%': { transform: 'translate(-30%, -50%)' },
          '100%': { transform: 'translate(-70%, -50%)' }
        },
        'vertical-bounce': {
          '0%': { transform: 'translateY(-80%)' },
          '100%': { transform: 'translateY(-5%)' }
        },
      }
    },
    fontSize: {
      ...new Array(100).fill(1).reduce((cur, _, index) => {
        cur[`${index + 1}px`] = `${index + 1}px`;
        return cur;
      }, {}),
      0.48: '0.12rem',
      0.56: '0.14rem',
      0.64: '0.16rem',
      0.8: '0.2rem',
      0.96: '0.24rem',
      1.28: '0.32rem',
    },
    borderRadius: {
      ...new Array(100).fill(1).reduce((cur, _, index) => {
        cur[`${index + 1}px`] = `${index + 1}px`;
        return cur;
      }, {}),
      '1/2': '50%',
      0.2: '0.05rem',
      0.32: '0.08rem',
      0.8: '0.2rem',
      ...defaultTheme.borderRadius,
    },
    scale: {
      0: '0',
      100: '1',
      103: '1.03',
      105: '1.05',
      110: '1.1',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
