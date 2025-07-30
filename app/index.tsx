import React, { useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function IdleClanIndexScreen() {
  const [name, setName] = useState('');
  const [ign, setIgn] = useState('');
  const [reason, setReason] = useState('');
  const [previousClan, setPreviousClan] = useState('');
  const [leaveReason, setLeaveReason] = useState('');
  const [age, setAge] = useState('');

  const [members, setMembers] = useState([
    {
      id: '1',
      name: 'ICC-Melly',
      role: 'Co-Leader',
      image: 'https://i.imgur.com/6VBx3io.png',
    },
    {
      id: '2',
      name: 'ICC-Bert23',
      role: 'Co-Owner',
      image: 'https://i.imgur.com/5D6pTuN.png',
    },
     {
      id: '2',
      name: 'ICC-Blueworks',
      role: 'Admin',
      image: 'https://i.imgur.com/5D6pTuN.png',
    },
  ]);

  const collabs = [
    'July 30: Friendly Match w/ Team Alpha',
    'Aug 5: Raid Event',
    'Aug 12: Training with Clan B',
  ];

  const handleApplicationSubmit = () => {
    if (name && ign && reason && previousClan && leaveReason && age) {
      // Magdagdag ng bagong member sa list
      const newMember = {
        id: Date.now().toString(),
        name,
        role: 'OG Member',
        image: 'https://i.imgur.com/sB2J9nj.png', // Placeholder image
      };

      setMembers((prev) => [...prev, newMember]);

      Alert.alert('Application Submitted', 'Welcome to IDLE COUNTRY CLUB!');

      // Clear all fields
      setName('');
      setIgn('');
      setReason('');
      setPreviousClan('');
      setLeaveReason('');
      setAge('');
    } else {
      Alert.alert('Error', 'Paki fill-up lahat ng fields!');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>🏰 IDLE COUNTRY CLUB</Text>

      {/* Logo */}
      <Image source={require('../assets/icc.jpg')} style={styles.logo} />

      {/* Admin Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>👑 Admin</Text>
        <Text>Leader: ICC-Emie</Text>
        <Text>Facebook: fb.com/idlecountryclub</Text>
        <Text>Tiktok: @Icc_tiktok.com</Text>
      </View>

      {/* Members List */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>👥 Clan Members</Text>
        <FlatList
          data={members}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.memberCard}>
              <Image source={{ uri: item.image }} style={styles.avatar} />
              <View>
                <Text style={styles.memberName}>{item.name}</Text>
                <Text style={styles.memberRole}>{item.role}</Text>
              </View>
            </View>
          )}
        />
      </View>

      {/* Application Form */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📝 Application Form</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="In-Game Name (IGN)"
          value={ign}
          onChangeText={setIgn}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />
        <TextInput
          style={styles.input}
          placeholder="Previous Clan"
          value={previousClan}
          onChangeText={setPreviousClan}
        />
        <TextInput
          style={[styles.input, { height: 60 }]}
          placeholder="Reason for Leaving Old Clan"
          value={leaveReason}
          onChangeText={setLeaveReason}
          multiline
        />
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholder="Why do you want to join IDLE COUNTRY CLUB?"
          value={reason}
          onChangeText={setReason}
          multiline
        />
        <Button title="Submit Application" onPress={handleApplicationSubmit} />
      </View>

      {/* Collabs */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🤝 Upcoming Collabs</Text>
        {collabs.map((item, index) => (
          <Text key={index}>• {item}</Text>
        ))}
      </View>

      {/* Attendance */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📸 Attendance</Text>
        <Text style={{ color: 'gray' }}>📷 Attendance image upload coming soon.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#eaf3ff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#2b4c7e',
  },
  logo: {
    width: 160,
    height: 110,
    borderRadius: 30,
    alignSelf: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#37474f',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    fontSize: 16,
    padding: 5,
  },
  memberCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginRight: 15,
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  memberRole: {
    color: 'gray',
  },
});