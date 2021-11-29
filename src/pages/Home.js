import React, { useState } from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Modal,  } from 'antd';
import { useNavigate } from 'react-router';
import {auth , signOut} from '../routes/Firebase'


const Home = () => {
    let navigate = useNavigate()
    function SignOut(){
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/login')
          }).catch((error) => {
            // An error happened.
          });
        }
        //   main PAGE WORK

        const { Meta } = Card;
    
    const [loading, setLoading] = useState(false)

    const onChange = checked => {
        setLoading(!checked)

    };

    
    
    return (
        <div id="home-page-div">
            <h1 className="heading">TEAM REPORT</h1>
            <hr />
            <br />
            <div>
                <h2 className="heading">Teams you own </h2>


                {/* card code */}
                <Card
                    style={{ width: 800, marginTop: 16, marginLeft: 60 }}
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                    className="card-adjust"
                >
                    <Skeleton loading={loading} avatar active>
                        <Meta

                            title="Card title"
                            description="This is the description"
                        />
                    </Skeleton>
                </Card>

                {/* card code end */}

                



            </div>
            <button id="team-create-btn">+</button>



            <Button onClick={SignOut} id="logout-btn">Logout</Button>
        </div>
    )

}

export default Home;

