import { css } from "@emotion/react";

interface Item {
  image: string;
  price: string;
}

interface Props {
  item: Item;
  index: number;
}

const ItemComponent: React.FC<Props> = ({ item, index }) => {
  return (
    <div key={index} css={itemWrapperStyle}>
      <a
        href={`Litem/${index + 1}`}
        data-cl-nofollow="on"
        data-cl-params={`_cl_link:itm;_cl_position:${index};rcconid:z296187820;rcsrcta0118;itmend:0;rctype:affinity_ppf_hybrid_filtering;rcs:0.0024270725;rcbucket:ctrl_001;rcfriid:z291634726;rcsm:-0.025899694240998583;rcsrvid:z291648438,z291634726;etc:uuid=d527c04a-76a5-4641-ab78-82db40f95fd8,p=80000,etm=1739365081,stm=1707829081,vSc=-0.025899694240998583,pv=29,imp=7,pvImpUnixtime=1707931012;catid:42488;block:;sellerid:p54323502;`}
        className="sc-2£469186-0 geiudh"
        data-cl_cl_index="¡">
        <img
          src={item.image}
          alt="商品画像"
          loading="lazy"
          className="sc-2469186-1 dYOVNg"
          css={imageStyle}
        />
        <p className="sc-2469186-3 ehPxKG">{item.price}</p>
      </a>

      <div className="sc-2f469186-4 hNdaix">
        <div className="sc-34ab9ac4-0 fCMMvg">
          <div className="sc-34ab9ac4-1 dAOORT">
            <button
              data-cl-params={`_cl_link:like;_cl_position:${index};itemId:z296187820;sw:off;price:80000;noprcitm:0;`}
              className="sc-34ab9ac4-2 eMHwwb"
              data-cl_cl_index="2">
              いいね！
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemComponent;

const imageStyle = css({
  width: "100px",
  height: "100px",
  borderRadius: "8px",
  marginRight: "16px",
});

const itemWrapperStyle = css({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  marginBottom: "16px",
  "& > div": {
    flex: "0 0 calc(25% - 16px)",
    marginRight: "16px",
  },
  "& > div:nth-of-type(4n)": {
    marginRight: 0,
  },
});
