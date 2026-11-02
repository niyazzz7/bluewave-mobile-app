import React,{useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Page } from '../components/UI';
import { COLORS } from '../theme';
const results=['Minimal Backpack','$39.00','Wireless Headphones','$79.00','Everyday Sneakers','$64.00','Travel Bottle','$18.00'];
export function SearchFilterScreen(){const [query,setQuery]=useState('');const [category,setCategory]=useState('All');return <Page title="Search & Filter" subtitle="Find exactly what you are looking for.">
 <TextInput value={query} onChangeText={setQuery} placeholder="⌕  Search products..." style={s.search}/>
 <View style={s.categories}>{['All','Fashion','Tech','Lifestyle'].map(c=><TouchableOpacity key={c} onPress={()=>setCategory(c)} style={[s.chip,category===c&&s.chipActive]}><Text style={[s.chipText,category===c&&{color:'#fff'}]}>{c}</Text></TouchableOpacity>)}</View>
 <View style={s.row}><Text style={s.resultTitle}>Results</Text><Text style={s.count}>Sort: Recommended⌄</Text></View>
 <View style={s.grid}>{results.filter((v,i)=>i%2===0&&v.toLowerCase().includes(query.toLowerCase())).map((v,i)=><View key={v} style={s.product}><View style={s.productImg}><Text style={{fontSize:28}}>▧</Text></View><Text style={s.name}>{v}</Text><Text style={s.price}>{results[results.indexOf(v)+1]}</Text></View>)}</View>
 </Page>}
const s=StyleSheet.create({search:{height:45,backgroundColor:'#fff',borderRadius:11,paddingHorizontal:13,fontSize:12},categories:{flexDirection:'row',gap:8,marginTop:14},chip:{paddingVertical:8,paddingHorizontal:13,borderRadius:18,backgroundColor:'#fff'},chipActive:{backgroundColor:COLORS.blue},chipText:{fontSize:11,color:COLORS.text,fontWeight:'700'},row:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:24},resultTitle:{fontSize:16,fontWeight:'800',color:COLORS.text},count:{fontSize:10,color:COLORS.muted},grid:{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'},product:{width:'48%',backgroundColor:'#fff',borderRadius:13,padding:10,marginTop:12},productImg:{height:105,backgroundColor:'#EAF2FF',borderRadius:9,alignItems:'center',justifyContent:'center'},name:{fontSize:11,fontWeight:'700',color:COLORS.text,marginTop:8},price:{fontSize:12,fontWeight:'800',color:COLORS.blue,marginTop:4}});
