import React, { Component } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import Page from "./Page.js";
import CommentsView from "./CommentsView.js";

const styles = {
  container: {
    flex: 1
  },

  wrapper: {},

  slide: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15
  }
};

export default class extends Component {
  render() {
    if(this.props.aux == 0){
    const page0 = this.props.page0.split('<text>')
    const page1 = this.props.page1.split('<text>')
    const page2 = this.props.page2.split('<text>')
    const page3 = this.props.page3.split('<text>')
    console.log(page0)
    return (
      <Swiper
        style={styles.wrapper}
        height={400}
        dot={
          <View
            style={{
              backgroundColor: "rgba(0,0,0,.2)",
              width: 5,
              height: 5,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: "#000",
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3
            }}
          />
        }
        paginationStyle={{
          bottom: -23,
          left: null,
          right: 10
        }}
        loop={true}
      >
        <Page
          design={styles.slide}
          backColor="rgba(0,0,20,0.87)"
          text1={page0[0]}
          text2={page0[1]}
          text3={page0[2]}
          text4={page0[3]}
          text5={page0[4]}
          title={<Text numberOfLines={1}>Page One</Text>}
        />
        <Page
          design={styles.slide}
          backColor="rgba(0,0,20,0.67)"
          text1={page1[0]}
          text2={page1[1]}
          text3={page1[2]}
          text4={page1[3]}
          text5={page1[4]}
          title={<Text numberOfLines={1}>Page Two</Text>}
        />
        <Page
          design={styles.slide}
          backColor="rgba(0,0,20,0.77)"
          text1={page2[0]}
          text2={page2[1]}
          text3={page2[2]}
          text4={page2[3]}
          text5={page2[4]}
          title={<Text numberOfLines={1}>Page Three</Text>}
        />
        <Page
          design={styles.slide}
          backColor="rgba(0,0,20,0.57)"
          text1={page3[0]}
          text2={page3[1]}
          text3={page3[2]}
          text4={page3[3]}
          text5={page3[4]}
          title={<Text numberOfLines={1}>Page Four</Text>}
        />
      </Swiper>
    );
      }
      else{
        const page0 = this.props.page0.split('<text>')
    console.log(page0)
    return (
      <View
        style={styles.wrapper}
        height={400}
      >
        <CommentsView
          design={styles.slide}
          backColor="rgba(200,200,200,0.87)"
          user = {this.props.user}
          title={<Text numberOfLines={1}>Page One</Text>}
          publishId = {this.props.publishId}
          text0 = {this.props.text0}
          text1 = {this.props.text1}
          text2 = {this.props.text2}
          text3 = {this.props.text3}
          text4 = {this.props.text4}
          text5 = {this.props.text5}
          text6 = {this.props.text6}
          verified0 = {this.props.verified0}
          verified1 = {this.props.verified1}
          verified2 = {this.props.verified2}
          verified3 = {this.props.verified3}
          verified4 = {this.props.verified4}
          verified5 = {this.props.verified5}
          verified6 = {this.props.verified6}
          user0 = {this.props.user0}
          user1 = {this.props.user1}
          user2 = {this.props.user2}
          user3 = {this.props.user3}
          user4 = {this.props.user4}
          user5 = {this.props.user5}
          user6 = {this.props.user6}
        />
      </View>
    );

      }
  }
}
