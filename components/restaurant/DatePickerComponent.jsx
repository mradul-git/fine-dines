import { View, Text,TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from "@react-native-community/datetimepicker"

const DatePickerComponent = ({date,setDate}) => {
  const [show,setShow] = useState(false);
  
  const onChange =(event,selectedDate)=>{
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  }


    const handlePress = () =>{
        setShow(true)
    }

  return (
    <View className="flex flex-row">
         <TouchableOpacity
         onPress={handlePress}
         className={` rounded-lg text-white text-base ${
            Platform.OS === "android" && "px-2 py-1 justify-center bg-[#474747]"
          } `}
         >
            {Platform.OS === "android" && (
          <Text className="px-2 py-1 bg-[#474747] text-white">
            {date.toLocaleDateString()}
          </Text>
        )}
             {Platform.OS === "android" && show &&(
                <DateTimePicker 
                value={date}
                mode="date"
                display="default"
                textColor='white'
                minimumDate={new Date()}
                maximumDate={new Date(new Date().setDate(new Date().getDate()+7))}
                accentColor='#f49b33'
                onChange={onChange}
             
             />
      
            ) }

            {Platform.OS==="ios" && (
             <DateTimePicker 
             value={date}
             mode="date"
             display="default"
             minimumDate={new Date()}
             maximumDate={new Date(new Date().setDate(new Date().getDate()+7))}
             accentColor='#f49b33'
             onChange={onChange}
          
          />
   
            )}
       
      

         </TouchableOpacity>
    </View>
  )
}

export default DatePickerComponent