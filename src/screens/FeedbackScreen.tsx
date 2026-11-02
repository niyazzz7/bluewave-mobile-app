import React,{useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Page, Button } from '../components/UI';
import { COLORS } from '../theme';
export function FeedbackScreen(){const [rating,setRating]=useState(4);const [comment,setComment]=useState('');return <Page title="Your opinion matters" subtitle="Tell us about your experience.">
 <View style={s.card}><Text style={s.question}>How would you rate Bluewave?</Text><View style={s.stars}>{[1,2,3,4,5].map(n=><TouchableOpacity key={n} onPress={()=>setRating(n)}><Text style={[s.star,{color:n<=rating?'#FFB547':'#D9DFE8'}]}>★</Text></TouchableOpacity>)}</View><Text style={s.rating}>{rating} out of 5</Text></View>
 <Text style={s.label}>What did you like most?</Text><View style={s.tags}><Text style={s.tag}>Easy to use</Text><Text style={s.tag}>Design</Text><Text style={s.tag}>Features</Text><Text style={s.tag}>Speed</Text></View>
 <Text style={s.label}>Additional comments</Text><TextInput multiline value={comment} onChangeText={setComment} placeholder="Share your thoughts..." style={s.input}/>
 <Button title="Send feedback" onPress={()=>Alert.alert('Thank you!','Your feedback has been submitted.')}/>
 </Page>}
const s=StyleSheet.create({card:{backgroundColor:'#fff',padding:18,borderRadius:15,alignItems:'center',marginTop:10},question:{fontSize:14,fontWeight:'800',color:COLORS.text},stars:{flexDirection:'row',gap:8,marginTop:12},star:{fontSize:31},rating:{fontSize:11,color:COLORS.muted,marginTop:5},label:{fontSize:12,fontWeight:'800',color:COLORS.text,marginTop:22,marginBottom:9},tags:{flexDirection:'row',flexWrap:'wrap',gap:8},tag:{backgroundColor:'#EAF2FF',color:COLORS.blue,paddingHorizontal:12,paddingVertical:8,borderRadius:18,fontSize:11,fontWeight:'700',overflow:'hidden'},input:{backgroundColor:'#fff',borderWidth:1,borderColor:'#E5EAF2',borderRadius:12,height:100,padding:12,textAlignVertical:'top',fontSize:12}});
