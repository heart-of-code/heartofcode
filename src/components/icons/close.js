
import styled from 'styled-components'

import { Link } from 'components/link'

export const CloseIcon = styled(Link)`

    height: 1.5em;
    width: 1.5em;
    position: relative;
    flex-shrink: 0;
    margin-top: 2px;
    margin-right: 10px;

    :hover {
        :before, :after {
            background: #FFB736;
        }
    }

    :before, :after {
        content: "";
        position: absolute;
        top: 50%;
        height: 5px;
        width: 100%;
        background: white;
    }

    :before {
        transform: translateY(-50%) rotate(45deg);
    }

    :after {
        transform: translateY(-50%) rotate(-45deg);
    }

`