/*
 * @Author: gxg
 * @Date: 2021-08-02 18:14:23
 * @Description: home
 */

import { View, ScrollView } from '@tarojs/components'
import { useDidShow } from '@tarojs/taro'
import { useState } from 'react'
import styles from './index.module.scss'

export default function HomePage() {
  const [scrollLower, setScrollLower] = useState(false)

  const scrollToLower = () => {
    setScrollLower((scrollLower) => !scrollLower)
  }
  return (
    <ScrollView
      className={styles.container}
      scrollY
      enableBackToTop
      refresherEnabled
      lowerThreshold={5}
      onScrollToLower={scrollToLower}
    >
      {/* <InviteToTry />
      <ContactAdmin /> */}
      <View className={styles.wrapper}>
        首页
      </View>
    </ScrollView>
  )
}
