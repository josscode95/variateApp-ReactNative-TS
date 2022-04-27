import React, { useState } from 'react'
import { ScrollView, View, RefreshControl } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const PullToRefreshScreen = () => {

  const { top } = useSafeAreaInsets();

  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>()

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false)
      setData('Hola mundo')
    }, 1500)
  }

  return (
    <ScrollView
      style={{marginTop: refreshing ? top : 0}}
      refreshControl={
        <RefreshControl 
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressBackgroundColor='white'
          colors={['blue', 'red', 'orange']}
        />
      }
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title="PullToRefresh" />
         {
           data && <HeaderTitle title={data} />
         }
      </View>
    </ScrollView>
  )
}
