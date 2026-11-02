import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { OnboardingScreen } from './src/screens/OnboardingScreen';
import { SubscriptionScreen } from './src/screens/SubscriptionScreen';
import { AuthScreen } from './src/screens/AuthScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { ChatScreen } from './src/screens/ChatScreen';
import { EmptyScreen } from './src/screens/EmptyScreen';
import { FeedbackScreen } from './src/screens/FeedbackScreen';
import { SearchFilterScreen } from './src/screens/SearchFilterScreen';
import { ShopScreen } from './src/screens/ShopScreen';
import { EventsScreen } from './src/screens/EventsScreen';
import { MapScreen } from './src/screens/MapScreen';
import { COLORS } from './src/theme';

type ScreenKey = 'Home' | 'Chat' | 'Shop' | 'Events' | 'Settings' | 'Onboarding' | 'Subscription' | 'Login' | 'Empty' | 'Feedback' | 'Search' | 'Map';

const tabs: { key: ScreenKey; label: string; icon: string }[] = [
  { key: 'Home', label: 'Home', icon: '⌂' },
  { key: 'Chat', label: 'Chat', icon: '▤' },
  { key: 'Shop', label: 'Shop', icon: '▣' },
  { key: 'Events', label: 'Events', icon: '▦' },
  { key: 'Settings', label: 'Profile', icon: '○' },
];

function HomeScreen({ go }: { go: (s: ScreenKey) => void }) {
  return <ScrollView contentContainerStyle={styles.home}>
    <Text style={styles.eyebrow}>WELCOME TO BLUEWAVE</Text>
    <Text style={styles.hero}>Everything you need,{"\n"}in one place.</Text>
    <Text style={styles.sub}>Explore products, connect with people and discover events around you.</Text>
    <View style={styles.heroCard}>
      <View style={styles.heroCircle}><Text style={{fontSize: 42}}>✦</Text></View>
      <Text style={styles.cardTitle}>Make every day count</Text>
      <Text style={styles.cardSub}>A simple space for your everyday activities.</Text>
      <TouchableOpacity style={styles.primary} onPress={() => go('Shop')}><Text style={styles.primaryText}>Explore now</Text></TouchableOpacity>
    </View>
    <Text style={styles.sectionTitle}>Explore sections</Text>
    <View style={styles.grid}>
      {[
        ['▣','E-commerce','Shop'],['▦','Events','Events'],['⌕','Search & filter','Search'],['⌖','Map','Map'],
        ['✉','Messages','Chat'],['☆','Feedback','Feedback'],['☰','Empty state','Empty'],['⚙','Settings','Settings']
      ].map(([icon,label,key]) => <TouchableOpacity key={label} style={styles.tile} onPress={() => go(key as ScreenKey)}>
        <Text style={styles.tileIcon}>{icon}</Text><Text style={styles.tileText}>{label}</Text><Text style={styles.chevron}>›</Text>
      </TouchableOpacity>)}
    </View>
    <Text style={styles.sectionTitle}>Account</Text>
    <View style={styles.quickRow}>
      <TouchableOpacity style={styles.outline} onPress={() => go('Onboarding')}><Text style={styles.outlineText}>Onboarding</Text></TouchableOpacity>
      <TouchableOpacity style={styles.outline} onPress={() => go('Subscription')}><Text style={styles.outlineText}>Subscription</Text></TouchableOpacity>
      <TouchableOpacity style={styles.outline} onPress={() => go('Login')}><Text style={styles.outlineText}>Login</Text></TouchableOpacity>
    </View>
  </ScrollView>;
}

export default function App() {
  const [screen, setScreen] = useState<ScreenKey>('Home');
  const go = (s: ScreenKey) => setScreen(s);
  const isTab = tabs.some(t => t.key === screen);
  const renderScreen = () => {
    switch (screen) {
      case 'Home': return <HomeScreen go={go} />;
      case 'Onboarding': return <OnboardingScreen onContinue={() => go('Subscription')} />;
      case 'Subscription': return <SubscriptionScreen onContinue={() => go('Login')} />;
      case 'Login': return <AuthScreen />;
      case 'Settings': return <SettingsScreen />;
      case 'Chat': return <ChatScreen />;
      case 'Empty': return <EmptyScreen />;
      case 'Feedback': return <FeedbackScreen />;
      case 'Search': return <SearchFilterScreen />;
      case 'Shop': return <ShopScreen />;
      case 'Events': return <EventsScreen />;
      case 'Map': return <MapScreen />;
      default: return <HomeScreen go={go} />;
    }
  };
  return <SafeAreaProvider><SafeAreaView style={styles.safe}>
    <StatusBar style="dark" />
    <View style={styles.topbar}>
      <Text style={styles.brand}>● <Text style={{color: COLORS.text}}>bluewave</Text></Text>
      <TouchableOpacity onPress={() => go('Settings')} style={styles.avatar}><Text style={styles.avatarText}>A</Text></TouchableOpacity>
    </View>
    <View style={styles.content}>{renderScreen()}</View>
    {isTab && <View style={styles.tabbar}>{tabs.map(t => <TouchableOpacity key={t.key} style={styles.tab} onPress={() => go(t.key)}>
      <Text style={[styles.tabIcon, screen === t.key && styles.activeTab]}>{t.icon}</Text>
      <Text style={[styles.tabLabel, screen === t.key && styles.activeTab]}>{t.label}</Text>
    </TouchableOpacity>)}</View>}
  </SafeAreaView></SafeAreaProvider>;
}

const styles = StyleSheet.create({
  safe:{flex:1,backgroundColor:COLORS.bg},topbar:{height:54,paddingHorizontal:22,flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:'#fff'},
  brand:{fontSize:19,fontWeight:'800',color:COLORS.blue,letterSpacing:-.5},avatar:{width:34,height:34,borderRadius:17,backgroundColor:'#E8F1FF',alignItems:'center',justifyContent:'center'},
  avatarText:{color:COLORS.blue,fontWeight:'700'},content:{flex:1},tabbar:{height:66,backgroundColor:'#fff',borderTopWidth:1,borderTopColor:'#EDF0F5',flexDirection:'row',justifyContent:'space-around',alignItems:'center'},
  tab:{alignItems:'center',justifyContent:'center',minWidth:55},tabIcon:{fontSize:21,color:'#9AA4B2'},tabLabel:{fontSize:10,color:'#9AA4B2',marginTop:3},activeTab:{color:COLORS.blue,fontWeight:'800'},
  home:{padding:20,paddingBottom:32},eyebrow:{fontSize:10,fontWeight:'800',letterSpacing:1.4,color:COLORS.blue,marginTop:8},hero:{fontSize:30,lineHeight:36,fontWeight:'800',color:COLORS.text,marginTop:10},sub:{fontSize:13,lineHeight:20,color:COLORS.muted,marginTop:10},
  heroCard:{backgroundColor:'#EAF2FF',borderRadius:22,padding:20,marginTop:22,alignItems:'flex-start'},heroCircle:{width:76,height:76,borderRadius:24,backgroundColor:'#D6E6FF',alignItems:'center',justifyContent:'center',marginBottom:14},
  cardTitle:{fontSize:18,fontWeight:'800',color:COLORS.text},cardSub:{fontSize:12,color:COLORS.muted,marginTop:5,marginBottom:16},primary:{backgroundColor:COLORS.blue,borderRadius:11,paddingVertical:13,paddingHorizontal:20,alignItems:'center'},primaryText:{color:'#fff',fontWeight:'700',fontSize:13},
  sectionTitle:{fontSize:17,fontWeight:'800',color:COLORS.text,marginTop:24,marginBottom:12},grid:{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'},tile:{width:'48%',backgroundColor:'#fff',borderRadius:14,padding:14,marginBottom:10,minHeight:92,justifyContent:'space-between'},
  tileIcon:{fontSize:23,color:COLORS.blue},tileText:{fontSize:12,fontWeight:'700',color:COLORS.text},chevron:{position:'absolute',right:14,top:36,color:'#AAB3C0',fontSize:20},quickRow:{flexDirection:'row',gap:8},outline:{borderWidth:1,borderColor:'#DCE6F5',borderRadius:10,padding:10,flex:1,alignItems:'center'},outlineText:{fontSize:11,color:COLORS.blue,fontWeight:'700'}
});