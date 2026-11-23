import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ViewStyle, ScrollView, Switch, KeyboardTypeOptions } from 'react-native';
import { COLORS } from '../theme';

export function Page({ title, subtitle, children, scroll = true }: { title: string; subtitle?: string; children: React.ReactNode; scroll?: boolean }) {
  const content = <>
    <Text style={u.title}>{title}</Text>
    {subtitle ? <Text style={u.subtitle}>{subtitle}</Text> : null}
    {children}
  </>;
  if (!scroll) return <View style={u.page}>{content}</View>;
  return <ScrollView contentContainerStyle={u.scrollContent} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">{content}</ScrollView>;
}
export function Button({ title, onPress, secondary = false }: { title: string; onPress?: () => void; secondary?: boolean }) {
  return <TouchableOpacity onPress={onPress} style={[u.button, secondary && u.secondary]}><Text style={[u.buttonText, secondary && u.secondaryText]}>{title}</Text></TouchableOpacity>;
}
export function Field({ label, placeholder, value, onChangeText, secureTextEntry = false, keyboardType, maxLength }: { label: string; placeholder: string; value?: string; onChangeText?: (v: string) => void; secureTextEntry?: boolean; keyboardType?: KeyboardTypeOptions; maxLength?: number }) {
  return <View style={u.fieldWrap}><Text style={u.label}>{label}</Text><TextInput style={u.input} placeholder={placeholder} placeholderTextColor="#AAB3C0" value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} keyboardType={keyboardType} maxLength={maxLength} /></View>;
}
export function Card({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  return <View style={[u.card, style]}>{children}</View>;
}
export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <View style={{ marginTop: 22 }}><Text style={u.section}>{title}</Text>{children}</View>;
}
export function ListItem({ title, subtitle, right, onPress, last = false, danger = false }: { title: string; subtitle?: string; right?: React.ReactNode; onPress?: () => void; last?: boolean; danger?: boolean }) {
  return <TouchableOpacity disabled={!onPress} activeOpacity={0.6} onPress={onPress} style={[u.item, !last && u.itemBorder]}>
    <View style={{ flex: 1 }}>
      <Text style={[u.itemTitle, danger && { color: COLORS.danger }]}>{title}</Text>
      {subtitle ? <Text style={[u.muted, { marginTop: 3 }]}>{subtitle}</Text> : null}
    </View>
    {right !== undefined ? right : (onPress ? <Text style={u.chev}>›</Text> : null)}
  </TouchableOpacity>;
}
export function ToggleRow({ label, subtitle, value, onValueChange, last = false }: { label: string; subtitle?: string; value: boolean; onValueChange: (v: boolean) => void; last?: boolean }) {
  return <View style={[u.item, !last && u.itemBorder]}>
    <View style={{ flex: 1, paddingRight: 10 }}>
      <Text style={u.itemTitle}>{label}</Text>
      {subtitle ? <Text style={[u.muted, { marginTop: 3 }]}>{subtitle}</Text> : null}
    </View>
    <Switch value={value} onValueChange={onValueChange} trackColor={{ true: COLORS.blue, false: '#D9DFE8' }} thumbColor="#fff" />
  </View>;
}
export function Chip({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return <TouchableOpacity onPress={onPress} style={[u.chip, active && u.chipActive]}><Text style={[u.chipText, active && { color: '#fff' }]}>{label}</Text></TouchableOpacity>;
}
export function Pill({ label, color = COLORS.blue, bg = COLORS.pale }: { label: string; color?: string; bg?: string }) {
  return <View style={[u.pill, { backgroundColor: bg }]}><Text style={{ fontSize: 10, fontWeight: '800', color }}>{label}</Text></View>;
}
export const u = StyleSheet.create({
  page: { flex: 1, padding: 20 },
  scrollContent: { flexGrow: 1, padding: 20, paddingBottom: 32 },
  title: { fontSize: 25, fontWeight: '800', color: COLORS.text, marginTop: 8 },
  subtitle: { fontSize: 13, lineHeight: 20, color: COLORS.muted, marginTop: 7, marginBottom: 18 },
  button: { backgroundColor: COLORS.blue, borderRadius: 11, paddingVertical: 14, alignItems: 'center', justifyContent: 'center', marginTop: 14 },
  buttonText: { color: '#fff', fontSize: 13, fontWeight: '800' },
  secondary: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#DCE6F5' },
  secondaryText: { color: COLORS.blue },
  fieldWrap: { marginTop: 13 },
  label: { fontSize: 11, fontWeight: '700', color: '#526075', marginBottom: 7 },
  input: { height: 47, borderWidth: 1, borderColor: '#E0E7F1', backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 13, fontSize: 13, color: COLORS.text },
  card: { backgroundColor: '#fff', borderRadius: 15, padding: 15, marginTop: 11, borderWidth: 1, borderColor: '#F0F2F7' },
  section: { fontSize: 16, fontWeight: '800', color: COLORS.text, marginBottom: 7 },
  muted: { color: COLORS.muted, fontSize: 12 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  pill: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, alignSelf: 'flex-start' },
  item: { minHeight: 50, flexDirection: 'row', alignItems: 'center', paddingVertical: 8 },
  itemBorder: { borderBottomWidth: 1, borderBottomColor: '#F0F2F6' },
  itemTitle: { fontSize: 13, fontWeight: '600', color: COLORS.text },
  chev: { fontSize: 21, color: '#AAB3C0', paddingLeft: 6 },
  chip: { paddingVertical: 8, paddingHorizontal: 13, borderRadius: 18, backgroundColor: '#fff', borderWidth: 1, borderColor: '#EDF0F5' },
  chipActive: { backgroundColor: COLORS.blue, borderColor: COLORS.blue },
  chipText: { fontSize: 11, color: COLORS.text, fontWeight: '700' },
});
