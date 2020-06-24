import React, { Component } from 'react';
import SideMenu from "./client_components/sidemenu/SideMenu";
import CourseList from "./client_components/mycorses/mycorses";
import RecommendedList from "./client_components/recommendedcorses/recommendedcorses";
import Footer from "./client_components/footer/footer"
import Achievements from "./client_components/achievements/achievements";
import NewsList from "./client_components/news/news";

export default class Client extends Component {
    render(){
        return (
                <div >
                    <SideMenu />
                    <div className="content">
                        <CourseList/>
                        <Achievements />
                        <NewsList />
                        <RecommendedList />
                    </div>
                    <Footer />
                 </div>)
            }
        }
