import React, { createContext, useContext, useState } from 'react';
import { Container, Group, Title, SubTitle, Text, Meta, Item, Entities, Feature, FeatureTitle, FeatureText, FeatureClose, Maturity, Content, Image } from './styles/tab';

export const FeatureContext = createContext();

export default function Tab({ children, ...restProps }) {

    return (
        <Container {...restProps}>{children}</Container>
    )
}

Tab.Entities = function TabEntities({ children, ...restProps }) {
    return <Entities {...restProps}>{children}</Entities>;
};

Tab.Group = function TabGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Tab.Title = function TabTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Tab.SubTitle = function TabSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Tab.Text = function TabText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Tab.Meta = function TabMeta({ children, ...restProps }) {
    return <Meta {...restProps}>{children}</Meta>;
};

Tab.Item = function TabItem({ item, children, ...restProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext);

    return (
        <Item
            onClick={() => {
                setItemFeature(item);
                setShowFeature(true);
            }}
            {...restProps}
        >
            {children}
        </Item>
    );
};

Tab.Image = function TabImage({ ...restProps }) {
    return <Image {...restProps} />;
  };

Tab.Feature = function TabFeature({ children, category, ...restProps }) {
    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

    return showFeature ? (
        <Feature {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="/images/icons/close.png" alt="Close" />
                </FeatureClose>

                <Group margin="30px 0" flexDirection="row" alignItems="center">
                    <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
                    <FeatureText fontWeight="bold">
                        {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                    </FeatureText>
                </Group>

                {children}
            </Content>
        </Feature>
    ) : null;
};