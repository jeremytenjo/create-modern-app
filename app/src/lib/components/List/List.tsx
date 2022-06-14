import React, { Fragment } from 'react'
import Box, { type BoxProps } from '@mui/material/Box'

// import AdUnit from '../googleAnalytics/AdUnit/AdUnit'

export type ListProps = {
  data: any[]
  ListItemComponent: any
  listItemProps?: any
  enableAds?: boolean
  sx?: BoxProps['sx']
  onItemClick?: (data: { data: any }) => any
}

export default function List({
  data = [],
  ListItemComponent,
  listItemProps = {},
  enableAds = false,
  sx = {},
  onItemClick = () => null,
}: ListProps) {
  return (
    <Wrapper sx={sx as any}>
      <Items
        data={data}
        ListItemComponent={ListItemComponent}
        listItemProps={listItemProps}
        enableAds={enableAds}
        onItemClick={onItemClick}
      />
    </Wrapper>
  )
}

const Wrapper = ({ children, sx = {} }) => {
  return (
    <Box
      component='ul'
      sx={{ display: 'grid', margin: '0', padding: '0', listStyle: 'none', ...sx }}
    >
      {children}
    </Box>
  )
}

const Items = ({
  data,
  ListItemComponent,
  listItemProps = {},
  enableAds,
  onItemClick,
}) => {
  return data.map((item, index) => {
    return (
      <Fragment key={item.id + Math.random() + index}>
        <Box
          component='li'
          sx={{
            listStyle: 'none',
          }}
          onClick={(e) => onItemClick({ e, data: item })}
        >
          <ListItemComponent index={index} {...item} {...listItemProps} />
        </Box>

        {enableAds && index === 7 && (
          <Box
            component='li'
            sx={{
              // TODO set grid column based on amount of items, eg 3 break
              gridColumn: '1/5',
              height: '345px',
            }}
          >
            {/* <AdUnit /> */}
          </Box>
        )}
      </Fragment>
    )
  })
}
