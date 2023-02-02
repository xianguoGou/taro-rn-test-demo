import { View, ScrollView } from '@tarojs/components'
import styles from './index.module.scss'

export default function HomePage() {

  return (
    <ScrollView
      className={styles.container}
      scrollY
      enableBackToTop
      refresherEnabled
      lowerThreshold={5}
    >
      <View className={styles.wrapper}>
        首页
      </View>
    </ScrollView>
  )
}
