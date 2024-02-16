import { css } from "@emotion/react";

export default function Main() {
  return (
    <div>
      <main
        className="sc-ebb6f68-0 afVot"
        style={{ color: "#FFF", overflow: "hidden" }}>
        <div className="sc-f22a111d-0 uZWTY TopMain">
          <div className="sc-f22a111d-4 htwamk"></div>
          <div id="topbnr" className="sc-6c3f1382-0 lftSgA"></div>
          <section id="rec" className="sc-b5944ad1-0 vHOrp">
            <h2 className="sc-b5944ad1-1 birybB" style={{ color: "#000" }}>
              <span className="sc-b9519356-0 1kCzRl">あなたへのおすすめ</span>
            </h2>
            <div className="sc-fa55e732-0 kptamo"></div>
          </section>
          <section id="cat" className="sc-c4071eaf-0 ddBsXF">
            <header className="sc-c4071eaf-1 iRfyw" style={{ display: "flex" }}>
              <h2 className="sc-c4071eaf-2 cKbEnj"></h2>
            </header>
            <ul className="sc-c4071eaf-3 dONYRC" style={{ flex: "1" }}>
              {}
            </ul>
          </section>
          <section id="balrec" className="sc-7098f1c9-0 CYDcik"></section>
          <div id="contents" className="sc-bfa15c2b-0 kadXBL"></div>
          <div className="sc-f22a111d-3 eChYDE"></div>
        </div>
        <div className="sc-fa55e732-0 kptqmo">
          <a
            href="Litem/2296187820"
            data-cl-nofollow="on"
            data-cl-params="_ .cl_link:itm;_cl_position:0;reconid:z296187820;rcsrcta0118;itmend:0;rctype:affinity_ppf_hybrid_filtering;rcs:0.0024270725;rcbucket:ctrl_001;rcfriid:z291634726;rcsm:-0.025899694240998583;rcsrvid:z291648438, z291634726;etc:uuid=d527c04a-76a5-4641-ab78-82db40f95fd8,p=80000,etm=1739365081,stm=1707829081,vSc=-0.025899694240998583,pv=29,imp=7,pvImpUnixtime=1707931012;catid:42488;block:;sellerid:p54323502;"
            className="sc-2469186-0 geiudh"
            data-c1_cl_index="¡">
            <img
              css={imageStyle}
              src="/item.jpeg"
              alt="商品画像"
              loading="lazy"
              className="sc-2469186-1 dYOVNg"
            />
          </a>
        </div>
        <p className="sc-2469186-3 ehPXKG"></p>
        <div className="sc-2469186-4 hNdajX"></div>
      </main>
    </div>
  );
}

const imageStyle = css({
  width: "100px",
  height: "100px",
  "border-radius": "8px",
});

const wrapperStyle = css({
  display: "flex",
  justifyContent: "space-between",
});

const rightStyle = css({
  display: "flex",
});

const mypageStyle = css({
  marginBottom: "0px",
  marginTop: "0px",
});
