import { createClient } from "urql";

const APIURL = "https://api.lens.dev";

export const client = createClient({
  url: APIURL,
});

export const getProfiles = `
query RecommendedProfiles {
	recommendedProfiles {
	      id
	    name
	    bio
	    attributes {
	      displayType
	      traitType
	      key
	      value
	    }
	      followNftAddress
	    metadata
	    isDefault
	    picture {
	      ... on NftImage {
		contractAddress
		tokenId
		uri
		verified
	      }
	      ... on MediaSet {
		original {
		  url
		  mimeType
		}
	      }
	      __typename
	    }
	    handle
	    coverPicture {
	      ... on NftImage {
		contractAddress
		tokenId
		uri
		verified
	      }
	      ... on MediaSet {
		original {
		  url
		  mimeType
		}
	      }
	      __typename
	    }
	    ownedBy
	    dispatcher {
	      address
	      canUseRelay
	    }
	    stats {
	      totalFollowers
	      totalFollowing
	      totalPosts
	      totalComments
	      totalMirrors
	      totalPublications
	      totalCollects
	    }
	    followModule {
	      ... on FeeFollowModuleSettings {
		type
		amount {
		  asset {
		    symbol
		    name
		    decimals
		    address
		  }
		  value
		}
		recipient
	      }
	      ... on ProfileFollowModuleSettings {
	       type
	      }
	      ... on RevertFollowModuleSettings {
	       type
	      }
	    }
	}
      }
`;

export const getProfile = `
query Profiles($id: ProfileId!) {
	profiles(request: { profileIds: [$id], limit: 25 }) {
	  items {
	    id
	    name
	    bio
	    attributes {
	      displayType
	      traitType
	      key
	      value
	    }
	    metadata
	    isDefault
	    picture {
	      ... on NftImage {
		contractAddress
		tokenId
		uri
		verified
	      }
	      ... on MediaSet {
		original {
		  url
		  mimeType
		}
	      }
	      __typename
	    }
	    handle
	    coverPicture {
	      ... on NftImage {
		contractAddress
		tokenId
		uri
		verified
	      }
	      ... on MediaSet {
		original {
		  url
		  mimeType
		}
	      }
	      __typename
	    }
	    ownedBy
	    dispatcher {
	      address
	      canUseRelay
	    }
	    stats {
	      totalFollowers
	      totalFollowing
	      totalPosts
	      totalComments
	      totalMirrors
	      totalPublications
	      totalCollects
	    }
	  }
	  pageInfo {
	    prev
	    next
	    totalCount
	  }
	}
      }
`;

export const getPublications = `
  query Publications($id: ProfileId!, $limit: LimitScalar) {
    publications(request: {
      profileId: $id,
      publicationTypes: [POST],
      limit: $limit
    }) {
      items {
        __typename 
        ... on Post {
          ...PostFields
        }
      }
    }
  }
  fragment PostFields on Post {
    id
    metadata {
      ...MetadataOutputFields
    }
    createdAt
  }
  fragment MetadataOutputFields on MetadataOutput {
    name
    description
    content
    media {
      original {
        ...MediaFields
      }
    }
    attributes {
      displayType
      traitType
      value
    }
  }
  fragment MediaFields on Media {
    url
    mimeType
  }
`;
