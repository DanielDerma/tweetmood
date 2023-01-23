import Head from 'next/head'
import Link from 'next/link'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartOptions,
  ChartData
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
);

interface TooltipPosition {
  x: number;
  y: number;
}

interface BarProps {
  options: ChartOptions<'bar'>;
  data: ChartData<'bar'>;
}

const data = {
  labels: ['Good, 1d streak', 'Awful, 2d streak', 'Good, 3d streak', 'Good, 4d streak', 'Good, 5d streak'],
  datasets: [
    {
      backgroundColor: '#dcdcdc',
      borderColor: '#000',
      borderWidth: {
        top: 4,
        right: 0,
        left: 0,
        bottom: 0,
      },
      hoverBackgroundColor: '#000',
      hoverBorderColor: '#000',
      barPercentage: 0.99,
      categoryPercentage: 1,
      data: [65, 59, 80, 81, 56]
    }
  ]
} as BarProps['data']

const options = {
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  plugins: {
    tooltip: {
      borderColor: '#000',
      borderWidth: 1,
      cornerRadius: 23,
    }
  }
} as BarProps['options']



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className="h-screen w-screen grid place-content-center">
          <div className="w-[500px]">
            <Bar data={data} options={options} style={{
              height: '100%',
              width: '100%',
            }} />
          </div>
        </div>
      </main>
    </>
  )
}
