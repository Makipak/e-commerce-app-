            // copyright @makipak
            // github : https://github.com/Makipak
            // linkedin : muhamadfarhanqolbi
            // Universitas Faletehan

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import "../../global.css";

// ✅ Mapping nama kategori ke gambar
const categoryImages: { [key: string]: any } = {
  "Intel i3": require("../../assets/images/p1.jpg"),
  "Intel i5": require("../../assets/images/p2.jpg"),
  "Intel i7": require("../../assets/images/p3.jpg"),
  "Intel i9": require("../../assets/images/p4.jpg"),
  "AMD Ryzen": require("../../assets/images/p3.jpg"),
  "NVIDIA GTX": require("../../assets/images/g1.jpg"),
  "NVIDIA RTX": require("../../assets/images/g2.jpg"),
  "AMD Radeon": require("../../assets/images/g3.jpg"),
  "Corsair": require("../../assets/images/ps1.jpg"),
  "Cooler Master": require("../../assets/images/ps2.jpg"),
  "Seasonic": require("../../assets/images/ps3.jpg"),
};

export default function KategoriScreen() {
  const [openSection, setOpenSection] = useState("Processor");

  const processors = ["Intel i3", "Intel i5", "Intel i7", "Intel i9", "AMD Ryzen"];
  const gpus = ["NVIDIA GTX", "NVIDIA RTX", "AMD Radeon"];
  const psus = ["Corsair", "Cooler Master", "Seasonic"];

  const toggleSection = (section: string) => {
    setOpenSection(prev => (prev === section ? "" : section));
  };

  const renderDropdown = (title: string, items: string[]) => (
    <View className="px-5 mt-5">
      {/* Header */}
      <TouchableOpacity
        className="flex-row justify-between items-center mb-2"
        onPress={() => toggleSection(title)}
        activeOpacity={0.7}
      >
        <Text className="text-base font-bold text-black">{title}</Text>
        <Ionicons
          name={openSection === title ? "chevron-down" : "chevron-forward"}
          size={16}
          color="black"
        />
      </TouchableOpacity>

      {/* Dropdown */}
      {openSection === title && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-2"
        >
          {items.map((item) => (
            <View key={item} className="items-center mr-4">
              <Image
                source={categoryImages[item]} //  gambar dari asset
                style={{ width: 56, height: 56, borderRadius: 999 }}
              />
              <Text className="text-xs text-black font-medium mt-1">{item}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="bg-green-500 rounded-b-[50px] px-6 py-4">
          <Text className="text-white font-extrabold text-2xl text-center">Kategori</Text>
        </View>

        {/* Sections */}
        {renderDropdown("Processor", processors)}
        {renderDropdown("GPU", gpus)}
        {renderDropdown("PSU", psus)}

        <View className="h-10" />
      </ScrollView>
    </SafeAreaView>
  );
}