import React, { useState } from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Skeleton, Switch, Card, Avatar, Input } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Modal, } from 'antd';
import { useNavigate } from 'react-router';
import { auth, signOut } from '../routes/Firebase'



const Home = () => {
    let navigate = useNavigate()
    function SignOut() {
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
    // create team code





    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        <Card style={{display:"block"}}/>
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const [showName , setShowName] = useState("");

    function handleChange(event) {
        console.log(event.target.value);
      }



    return (
        <div id="home-page-div">
            <h1 className="heading">&nbsp;&nbsp;&nbsp;TEAM REPORT</h1>
            <hr />
            <br />
            <div>
                <h2 className="heading">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Teams you own </h2>


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

                            title={showName}
                            description="This is the description"
                        />
                    </Skeleton>
                </Card>

                {/* card code end */}

                {/* modal code */}

                <Button type="primary" onClick={showModal} id="team-create-btn">
                    CREATE TEAM </Button>



                <Modal title="CREATE YOUR TEAM" visible={isModalVisible} onOk={handleOk } onCancel={handleCancel}>

                    <Input placeholder="Team Name"  id="modal-input"  onChange={(ev) => { setShowName(ev.target.value)}} value={showName} />
                    <Input placeholder="Leader Email" />

                </Modal>





            </div>




            <Button onClick={SignOut} id="logout-btn">Logout</Button>
        </div>
    )

}

export default Home;

