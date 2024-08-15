import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const posts = [
  {
    id: '1',
    user: 'Bhuri Bhuri Simon',
    username: '@Burgundy_chor',
    image: 'https://th.bing.com/th/id/R.ec5d85a777af1db8e6c0c658d8bb296c?rik=kAjkImLm1f8nAQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f--3NB9yNIQB8%2fTuci5LJ_uII%2fAAAAAAAAGDc%2f9I-usbEdASo%2fs1600%2fNalanda%2bUniversity%2bRuins%2bof%2bAncient%2bBihar.jpg&ehk=ZPu7HaGMVMSfQ1Zg4iztbzuTRlVrY4TjmVn2x%2bFiCFc%3d&risl=&pid=ImgRaw&r=0',
    likes: 122,
    comments: 10,
  },
  {
    id: '2',
    user: 'Green Demon',
    username: '@Hari_Danav',
    image: 'https://th.bing.com/th/id/OIP.GLvTWgCwV0C6YS3wWpxjYAHaE4?rs=1&pid=ImgDetMain',
    likes: 453,
    comments: 20,
  },
];

const PostItem = ({ post }: any) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.userContainer}>
        <Image
          source={{ uri: 'https://th.bing.com/th/id/OIP.Yi4GMy4vu1LF7DwmZoyh3wHaE9?rs=1&pid=ImgDetMain' }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.userName}>{post.user}</Text>
          <Text style={styles.userHandle}>{post.username}</Text>
        </View>
      </View>
      <Image source={{ uri: post.image }} style={styles.postImage} />
      <View style={styles.iconContainer}>
        <View style={styles.iconGroup}>
          <Icon name="comment" size={18} color="#666" />
          <Text style={styles.iconText}>{post.comments}</Text>
        </View>
        <View style={styles.iconGroup}>
          <Icon name="heart" size={18} color="#666" />
          <Text style={styles.iconText}>{post.likes}</Text>
        </View>
        <Icon name="bookmark" size={18} color="#666" />
      </View>
    </View>
  );
};

const AppPro = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>BharatCulture</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="bars" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostItem post={item} />}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="home" size={24} color="#9E62B0" />
          <Text style={styles.footerText}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="map-marker" size={24} color="#9E62B0" />
          <Text style={styles.footerText}>Places</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="calendar" size={24} color="#9E62B0" />
          <Text style={styles.footerText}>Events</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E1FF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#E5D4ED',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 8,
  },
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 16,
    padding: 16,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#666',
  },
  userHandle: {
    color: '#666',
    fontSize: 14,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  iconText: {
    marginLeft: 5,
    color: '#666',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#E5D4ED',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#9E62B0',
  },
});

export default AppPro;
