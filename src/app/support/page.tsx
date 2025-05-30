'use client';

import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
  LoadingIndicator,
} from 'stream-chat-react';
import { StreamChat, Channel as StreamChannel } from 'stream-chat';
import 'stream-chat-react/dist/css/v2/index.css';
import config from '@/shared/lib/config';

const apiKey = config.stream.apiKey;
const userId = 'demo-user';

console.log({ apiKey });

const chatClient = StreamChat.getInstance(apiKey);
const userToken = chatClient.devToken(userId);

const ChatPage: NextPage = () => {
  const [channel, setChannel] = useState<StreamChannel | null>(null);

  useEffect(() => {
    const initChat = async () => {
      try {
        if (!chatClient.userID) {
          await chatClient.connectUser(
            {
              id: userId,
              name: 'Demo User',
              image: `https://getstream.io/random_png/?id=${userId}&name=Demo`,
            },
            userToken
          );
        }

        const channel = chatClient.channel('messaging', 'general', {
          members: [userId],
        });

        await channel.watch();
        setChannel(channel);
      } catch (err) {
        console.error('Error initializing chat:', err);
      }
    };

    initChat();

    return () => {
      chatClient.disconnectUser();
    };
  }, []);

  if (!channel) return <LoadingIndicator />;

  return (
    <Chat client={chatClient} theme='messaging light'>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatPage;
