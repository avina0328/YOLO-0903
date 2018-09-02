import React, { Component } from 'react';
import './App.css';
import img_elBubbleDiaryBG from './images/FaceRecAndPublishScreen_elBubbleDiaryBG_507532.jpg';
import img_elFaceRecognition from './images/NewFaceRecScreen_elFaceRecognition_860360.png';
import img_elPublishBubble from './images/NewFaceRecScreen_elPublishBubble_291432.png';

// UI framework component imports
import Container from 'muicss/lib/react/container';


export default class FaceRecAndPublishScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: '#fcffff',
        pointerEvents: 'none',
     };
    const style_bubbleDiaryBG = {
        height: 'auto',
     };
    const style_bubbleDiaryBG_outer = {
        pointerEvents: 'none',
     };
    const style_faceRecognition = {
        height: 'auto',
     };
    const style_faceRecognition_outer = {
        pointerEvents: 'none',
     };
    const style_publishBubble = {
        height: 'auto',
     };
    const style_publishBubble_outer = {
        pointerEvents: 'none',
     };
    const style_button_PublishBubble = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_PublishBubble_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen FaceRecAndPublishScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elBubbleDiaryBG' style={style_bubbleDiaryBG_outer}>
            <img style={style_bubbleDiaryBG} src={img_elBubbleDiaryBG} alt=""  />
          
          </div>
          
          <div className='elFaceRecognition' style={style_faceRecognition_outer}>
            <img style={style_faceRecognition} src={img_elFaceRecognition} alt=""  />
          
          </div>
          
          <div className='elPublishBubble' style={style_publishBubble_outer}>
            <img style={style_publishBubble} src={img_elPublishBubble} alt=""  />
          
          </div>
          
          <div className='actionFont elButton_PublishBubble' style={style_button_PublishBubble_outer}>
            <div style={style_button_PublishBubble}   />
          
          </div>
          
        </div>
      </Container>
    )
  }
  

}
