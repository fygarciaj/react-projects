'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Badge from '@mui/material/Badge'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// Third-party Components
import classnames from 'classnames'
import { useKeenSlider } from 'keen-slider/react'
import type { KeenSliderPlugin } from 'keen-slider/react'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Libs Imports
import AppKeenSlider from '@/libs/styles/AppKeenSlider'

// Types
type DataType = {
  img: string
  title: string
  details: { [key: string]: string }
}

// Vars
const data: DataType[] = [
  {
    title: 'Mobiles & Computers',
    img: '/images/cards/apple-iphone-x.png',
    details: {
      Mobiles: '24',
      Accessories: '50',
      Tablets: '12',
      Computers: '38'
    }
  },
  {
    title: 'Appliances & Electronics',
    img: '/images/cards/ps4-joystick.png',
    details: {
      "TV's": '16',
      Cameras: '9',
      Speakers: '40',
      Consoles: '18'
    }
  },
  {
    title: 'Fashion',
    img: '/images/cards/apple-watch-green.png',
    details: {
      'T-shirts': '16',
      Shoes: '43',
      Watches: '29',
      SunGlasses: '7'
    }
  }
]

const Slides = () => {
  // Hooks
  const theme = useTheme()

  return (
    <>
      {data.map((slide: DataType, index: number) => {
        return (
          <div
            key={index}
            className={classnames('keen-slider__slide flex flex-col gap-6', {
              'mis-[-1px]': theme.direction === 'rtl',
              'mie-[1px]': theme.direction !== 'rtl'
            })}
          >
            <div className='flex items-start gap-6'>
              <img
                src={slide.img}
                className={classnames('max-bs-[102px] bs-[102px] rounded-lg', {
                  'scale-x-[-1]': theme.direction === 'rtl'
                })}
              />
              <div className='flex flex-col gap-2 is-full'>
                <Typography variant='h6'>{slide.title}</Typography>
                <Grid container spacing={3}>
                  {Object.keys(slide.details).map((key: string, index: number) => {
                    return (
                      <Grid item key={index} xs={12} sm={6}>
                        <div className='flex items-center gap-3'>
                          <CustomAvatar
                            color='primary'
                            variant='rounded'
                            className='font-medium rounded bg-actionSelected text-textSecondary bs-[30px] is-[43px]'
                          >
                            {slide.details[key]}
                          </CustomAvatar>
                          <Typography noWrap>{key}</Typography>
                        </div>
                      </Grid>
                    )
                  })}
                </Grid>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Button size='small' variant='outlined' startIcon={<i className='ri-sticky-note-line' />}>
                Details
              </Button>
              <Button size='small' variant='contained' startIcon={<i className='ri-download-line' />}>
                Report
              </Button>
            </div>
          </div>
        )
      })}
    </>
  )
}

const WeeklySales = () => {
  // States
  const [loaded, setLoaded] = useState<boolean>(false)
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  // Hooks
  const theme = useTheme()

  const ResizePlugin: KeenSliderPlugin = slider => {
    const observer = new ResizeObserver(function () {
      slider.update()
    })

    slider.on('created', () => {
      observer.observe(slider.container)
    })
    slider.on('destroyed', () => {
      observer.unobserve(slider.container)
    })
  }

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      rtl: theme.direction === 'rtl',
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      }
    },
    [ResizePlugin]
  )

  return (
    <AppKeenSlider>
      <Card>
        <CardHeader
          title='Weekly Sales'
          subheader={
            <div className='flex items-center gap-2'>
              <Typography variant='subtitle1'>Total $23.5k Earning</Typography>
              <div className='flex items-center text-success'>
                <Typography className='font-medium' color='success.main'>
                  +62%
                </Typography>
                <i className='ri-arrow-up-s-line text-xl' />
              </div>
            </div>
          }
          action={
            loaded &&
            instanceRef.current && (
              <div className='swiper-dots mbs-0'>
                {[...Array(instanceRef.current.track.details.slides.length).keys()].map(idx => {
                  return (
                    <Badge
                      key={idx}
                      variant='dot'
                      component='div'
                      className={classnames('mie-[10px] last:m-0', {
                        active: currentSlide === idx
                      })}
                      onClick={() => {
                        instanceRef.current?.moveToIdx(idx)
                      }}
                      sx={{
                        '& .MuiBadge-dot': {
                          minWidth: '6px',
                          width: '6px !important',
                          height: '6px !important',
                          backgroundColor: `${theme.palette.action.selected} !important`
                        },
                        '&.active .MuiBadge-dot': {
                          backgroundColor: `${theme.palette.primary.main} !important`
                        }
                      }}
                    ></Badge>
                  )
                })}
              </div>
            )
          }
        />
        <CardContent>
          <div ref={sliderRef} className='keen-slider relative'>
            <Slides />
          </div>
        </CardContent>
      </Card>
    </AppKeenSlider>
  )
}

export default WeeklySales