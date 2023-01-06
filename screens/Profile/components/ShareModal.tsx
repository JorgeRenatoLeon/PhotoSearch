import React from 'react';
import { View, Modal, Pressable, Text } from 'react-native';
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
    EmailIcon,
    FacebookIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
} from "react-share";

import styles from '../assets/styles/PhotoItem.js';

export type Props = {
    item: Photo,
    modalVisible: boolean,
    setModalVisible: Function
};

export type Photo = {
    id: number,
    title: string,
    image: string,
    editTitle: boolean
};

const PhotoActions: React.FC<Props> = ({item, modalVisible, setModalVisible}) => {

    return (
        <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
            transparent={true}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Pressable style={styles.closeButton} onPress={() => setModalVisible(!modalVisible)}>
                        <Text>X</Text>
                    </Pressable>

                    <EmailShareButton url={item.image} subject={item.title} body={item.title}>
                        <EmailIcon size={32} round />
                    </EmailShareButton>
                    <FacebookShareButton url={item.image} quote={item.title}>
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <HatenaShareButton url={item.image} title={item.title}>
                        <HatenaIcon size={32} round />
                    </HatenaShareButton>
                    <InstapaperShareButton url={item.image} title={item.title}>
                        <InstapaperIcon size={32} round />
                    </InstapaperShareButton>
                    <LineShareButton url={item.image} title={item.title}>
                        <LineIcon size={32} round />
                    </LineShareButton>
                    <LinkedinShareButton url={item.image} title={item.title}>
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                    <LivejournalShareButton url={item.image} title={item.title}>
                        <LivejournalIcon size={32} round />
                    </LivejournalShareButton>
                    <MailruShareButton url={item.image} title={item.title}>
                        <MailruIcon size={32} round />
                    </MailruShareButton>
                    <OKShareButton url={item.image} title={item.title}>
                        <OKIcon size={32} round />
                    </OKShareButton>
                    <PinterestShareButton url={item.image} media={item.image} description={item.title}>
                        <PinterestIcon size={32} round />
                    </PinterestShareButton>
                    <PocketShareButton url={item.image} title={item.title}>
                        <PocketIcon size={32} round />
                    </PocketShareButton>
                    <RedditShareButton url={item.image} title={item.title}>
                        <RedditIcon size={32} round />
                    </RedditShareButton>
                    <TelegramShareButton url={item.image} title={item.title}>
                        <TelegramIcon size={32} round />
                    </TelegramShareButton>
                    <TumblrShareButton url={item.image} title={item.title}>
                        <TumblrIcon size={32} round />
                    </TumblrShareButton>
                    <TwitterShareButton url={item.image} title={item.title}>
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <ViberShareButton url={item.image} title={item.title}>
                        <ViberIcon size={32} round />
                    </ViberShareButton>
                    <VKShareButton url={item.image} title={item.title}>
                        <VKIcon size={32} round />
                    </VKShareButton>
                    <WhatsappShareButton url={item.image} title={item.title}>
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <WorkplaceShareButton url={item.image} quote={item.title}>
                        <WorkplaceIcon size={32} round />
                    </WorkplaceShareButton>
                </View>
            </View>
        </Modal>
    );
}

export default PhotoActions;