<template>
  <div class="aviation_text">
    <div class="aviation_text_header">
      <a href="">
        <img src="@/assets/img/shouye/有问必答1_03.jpg" alt="" />
      </a>
    </div>
    <div class="aviation_text_content">
      <a-form-model
        ref="ruleForm"
        :model="form"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item ref="names" label="" prop="names">
          <div class="aviation_text_input">
            <span class="span"><em>*</em>学生姓名</span>
            <a-input
              v-model="form.names"
              placeholder="请填写姓名"
              @blur="
                () => {
                  $refs.names.onFieldBlur();
                }
              "
            ></a-input>
          </div>
        </a-form-model-item>
        <a-form-model-item ref="numbers" label="" prop="numbers">
          <div class="aviation_text_input">
            <span class="span"><em>*</em>手机号码</span>
            <a-input
              v-model="form.numbers"
              placeholder="请填写手机号码"
              @blur="
                () => {
                  $refs.numbers.onFieldBlur();
                }
              "
            ></a-input>
          </div>
        </a-form-model-item>
        <a-form-model-item ref="dates" label="" required prop="dates">
          <div class="aviation_text_input">
            <span class="span"><em>*</em>出生年月</span>
            <a-date-picker
              v-model="form.dates"
              type="date"
              style="height: 0.35rem; color: #000 !important"
              :size="size"
              placeholder="请选择出生年月"
              @blur="
                () => {
                  $refs.dates.onFieldBlur();
                }
              "
            />
          </div>
        </a-form-model-item>

        <a-form-model-item
          ref="regions"
          label=""
          style="margin: 0"
          prop="regions"
        >
          <div class="aviation_text_cascader">
            <span class="span"><em>*</em>所选专业</span>
            <div class="from_three">
              <a-select
                v-model="form.regions"
                placeholder="请选择专业"
                @blur="
                  () => {
                    $refs.regions.onFieldBlur();
                  }
                "
                style="
                  width: 2rem;
                  font-size: 0.15rem;
                  height: 0.35rem;
                  color: #ccc;
                  overflow: hidden;
                "
              >
                <a-icon
                  slot="suffixIcon"
                  type="caret-down"
                  style="width: 0.11rem; height: 0.08rem; color: #000"
                />
                <a-select-option value="新媒体">
                  <span style="color: #000">新媒体</span>
                </a-select-option>
                <a-select-option value="新能源">
                  <span style="color: #000">新能源</span>
                </a-select-option>
                <a-select-option value="高铁">
                  <span style="color: #000">高铁</span>
                </a-select-option>
                <a-select-option value="空乘">
                  <span style="color: #000">空乘</span>
                </a-select-option>
              </a-select>
            </div>
          </div>
        </a-form-model-item>

        <a-form-model-item
          ref="educations"
          label=""
          style="margin: 0"
          prop="educations"
        >
          <div class="aviation_text_cascader">
            <span class="span"><em>*</em>当前学历</span>
            <div class="from_three">
              <a-select
                v-model="form.educations"
                placeholder="请选择学历"
                @blur="
                  () => {
                    $refs.educations.onFieldBlur();
                  }
                "
                style="
                  width: 2rem;
                  font-size: 0.15rem;
                  height: 0.35rem;
                  color: #ccc;
                  overflow: hidden;
                "
              >
                <a-icon
                  slot="suffixIcon"
                  type="caret-down"
                  style="width: 0.11rem; height: 0.08rem; color: #000"
                />
                <a-select-option value="初中学历">
                  <span style="color: #000">初中学历</span>
                </a-select-option>
                <a-select-option value="高中学历">
                  <span style="color: #000">高中学历</span>
                </a-select-option>
                <a-select-option value="大专学历">
                  <span style="color: #000">大专学历</span>
                </a-select-option>
                <a-select-option value="本科学历">
                  <span style="color: #000">本科学历</span>
                </a-select-option>
              </a-select>
            </div>
          </div>
        </a-form-model-item>

        <a-form-model-item ref="id_numbers" label="" prop="id_numbers">
          <div class="aviation_text_input">
            <span class="span"><em>*</em>身份证号</span>
            <a-input
              v-model="form.id_numbers"
              placeholder="请填写身份证号"
              @blur="
                () => {
                  $refs.id_numbers.onFieldBlur();
                }
              "
            ></a-input>
          </div>
        </a-form-model-item>

        <a-form-model-item label="" prop="descs">
          <div class="aviation_textarea">
            <span>您的疑问</span>
            <div class="aviation_textarea_text">
              <textarea
                v-model="form.descs"
                name=""
                id=""
                cols="30"
                rows="10"
                style="color: #000"
                placeholder="请填写您的疑问"
              >
              </textarea>
            </div>
          </div>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <!-- <a-button type="primary" @click="onSubmit"> -->
          <div class="bottom_jick">
            <div class="aviation_text_button" @click="onSubmit">
              <span>立即提交</span>
            </div>
            <div class="submit-size">
              <div>
                <span @click="showModal">《隐私保障》</span>
              </div>
              <a-modal
                v-model="visible"
                title="隐私保障"
                ok-text="确认"
                cancel-text="取消"
                @ok="hideModal"
                
              >

                <h3 class="title_cent">煜龙教育APP使用条款和隐私政策</h3>
                <span class="jieshao">本《用户注册协议》是您（下称"用户"）与北京煜龙教育科技有限公司（下称"煜龙教育"）之间在使用煜龙教育出品的互联网产品之前，（又名"煜龙账号"，下统称"煜龙账号"）时签署的协议。 </span>
                <p class="jieshao1">1、重要须知---在签署本协议之前，煜龙教育正式提醒用户：</p>
                <p class="jieshao">
1.1、您应认真阅读（未成年人应当在监护人陪同下阅读）、充分理解本《用户注册协议》中各条款，包括免除或者限制煜龙教育责任的免责条款及对用户的权利限制条款。<br />
1.2、除非您接受本协议，否则用户无权也无必要继续接受煜龙教育的服务，可以退出本次注册。用户点击接受并继续使用煜龙教育的服务，视为用户已完全的接受本协议。<br />
1.3、本协议一经签署，具有法律效力，请您慎重考虑是否接受本协议。<br />
1.4、在您签署本协议之后，此文本可能因国家政策、产品以及履行本协议的环境发生变化而进行修改，修改后的协议发布在本网站上，若您对修改后的协议有异议的，请立即停止登录、使用煜龙教育产品及服务，若您登录或继续使用煜龙教育产品，视为对修改后的协议予以认可。<br />
                </p>
                <p class="jieshao1">2、关于“煜龙账号”</p>
                <p class="jieshao">
2.1、煜龙教育在旗下业务平台煜龙教育网以及煜龙在线上同时提供用户注册通道，用户在任一通道注册并接受本协议的具有同等效力。<br />
2.2、用户在接受本协议之后，有权选择未被其他用户使用过的字母符号组合作为用户的煜龙账号，并自行设置符合安全要求的密码。用户设置的账号、密码是用户用以登录煜龙教育产品，接受煜龙教育服务，金币等虚拟物品持有的凭证。<br />
2.3、用户在首次注册煜龙账号成功之后，煜龙教育会按系统规则自动分配给用户一个ID号码，ID号码与煜龙账号一样是用户接受煜龙教育服务的身份识别凭证。<br />
2.4、煜龙账号以及ID号码的性质上是煜龙教育提供服务授予用户的凭证，煜龙账号和ID号码是煜龙教育相应计算机软件作品的一部分，即煜龙教育将相关产品计算机软件著作权授权给注册用户的授权凭证。<br />
2.5、煜龙账号还是用户持有、使用相关虚拟财产、道具的身份凭证。用户若需要接受煜龙教育提供的增值服务，煜龙账号同时也是用户支付费用、接受增值服务的凭证。<br />
2.6、用户在注册了煜龙账号并不意味获得全部煜龙教育产品的授权，仅仅是取得了接受煜龙教育服务的身份，用户在登录相关网页、加载应用、下载安装软件时需要另行签署单个产品的授权协议。<br />
2.7、煜龙账号或ID号码仅限于在煜龙教育网站上注册用户本人使用，禁止赠与、借用、租用、转让或售卖。如果煜龙教育发现使用者并非账号初始注册人，有权在未经通知的情况下回收该账号而无需向该账号使用人承担法律责任，由此带来的包括并不限于用户通讯中断、用户资料和道具等清空等损失由用户自行承担。<br />
2.8、用户应当妥善保管自己的煜龙账号、密码，用户就其账号及密码项下之一切活动负全部责任，包括用户数据的修改，虚拟道具的损失以及其他所有的损失由用户自行承担。用户须重视煜龙账号密码保护。用户如发现他人未经许可使用其账号时立即通知煜龙教育。<br />
2.9、用户煜龙账号在丢失或遗忘密码后，可遵照煜龙教育的申诉途径及时申诉请求找回账号。用户应不断提供能增加账号安全性的个人密码保护资料。用户可以凭初始注册资料及个人密码保护资料填写申诉单向煜龙教育申请找回账号，煜龙教育的密码找回机制仅负责识别申诉单上所填资料与系统记录资料的正确性，而无法识别申诉人是否系真正账号权使用人。对用户因被他人冒名申诉而致的任何损失，煜龙教育不承担任何责任，用户知晓煜龙账号及密码保管责任在于用户，煜龙教育并不承诺煜龙账号丢失或遗忘密码后用户一定能通过申诉找回账号。<br />
2.10、用户保证注册煜龙账号时填写的身份信息是真实的，任何非法、不真实、不准确的用户信息所产生的责任由用户承担。用户应不断更新注册资料，符合及时、详尽、真实、准确的要求。所有原始键入的资料将引用用户的账号注册资料。如果因用户的注册信息不真实而引起的问题，以及对问题发生所带来的后果，煜龙教育不负任何责任。<br />
2.11、煜龙账号或ID号码的所有权属于煜龙教育。煜龙教育有权根据运营需要，发布煜龙在线社区规则规范。用户在使用煜龙在线产品的过程中，需遵守煜龙在线社区发布的各项规定。<br />
2.12、如用户违反法律法规、煜龙教育各服务协议或社区规则的等规定，煜龙教育有权根据相关规则进行违规判定，并采取相应限制或处罚措施，包括但不限于：限制或冻结用户对ID号码的使用，限制或停止某项单独服务（如视频直播），扣除保证金，扣减收入分成并根据实际情况决定是否恢复使用。<br />
2.13、为了充分利用ID号码资源，若用户存在长期未登录使用ID号码的情形，煜龙教育有权对该号码进行回收、替换等终止使用操作。<br />
2.14、煜龙教育依照社区规则限制、冻结、回收、替换或终止用户ID号码的使用，可能会给用户造成一定的损失，该损失由用户自行承担，煜龙教育不承担任何责任。<br />
                </p>
                <p class="jieshao1">3、用户不得从事以下行为：</p>
                <p class="jieshao">
3.1、利用煜龙教育服务产品发表、传送、传播、储存危害国家安全、国家统一、社会稳定的内容，或侮辱诽谤、色情、暴力、引起他人不安及任何违反国家法律法规政策的内容或者设置含有上述内容的网名、角色名。<br />
3.2、利用煜龙教育服务发表、传送、传播、储存侵害他人知识产权、商业机密权、肖像权、隐私权等合法权利的内容。<br />
3.3、进行任何危害计算机网络安全的行为，包括但不限于：使用未经许可的数据或进入未经许可的服务器/账户；未经允许进入公众计算机网络或者他人计算机系统并删除、修改、增加存储信息；未经许可，企图探查、扫描、测试本“软件”系统或网络的弱点或其它实施破坏网络安全的行为；企图干涉、破坏本“软件”系统或网站的正常运行，故意传播恶意程序或病毒以及其他破坏干扰正常网络信息服务的行为；伪造TCP/IP数据包名称或部分名称。<br />
3.4、进行任何破坏煜龙教育服务公平性或者其他影响应用正常秩序的行为，如主动或被动刷分、合伙作弊、使用外挂或者其他的作弊软件、利用BUG（又叫“漏洞”或者“缺陷”）来获得不正当的非法利益，或者利用互联网或其他方式将外挂、作弊软件、BUG公之于众。<br />
3.5、进行任何诸如发布广告、销售商品的商业行为，或者进行任何非法的侵害煜龙教育利益的行为，如贩卖煜龙在线金币、课程、图书等内容。<br />
3.6、进行其他任何违法以及侵犯其他个人、公司、社会团体、组织的合法权益的行为。<br />
                </p>
                <p class="jieshao1">4、煜龙教育声明</p>
                <p class="jieshao">
4.1、用户须明白，在使用煜龙教育服务可能存在有来自任何他人的包括威胁性的、诽谤性的、令人反感的或非法的内容或行为或对他人权利的侵犯（包括知识产权）的匿名或冒名的信息的风险，用户须承担以上风险，煜龙教育对服务不作担保，不论是明确的或隐含的，包括所有有关信息真实性、适当性、适于某一特定用途、所有权和非侵权性的默示担保和条件，对因此导致任何因用户不正当或非法使用服务产生的直接、间接、偶然、特殊及后续的损害，不承担任何责任。<br />
4.2、使用煜龙教育服务必须遵守国家有关法律和政策等，维护国家利益，保护国家安全，并遵守本条款，对于用户违法或违反本协议的使用(包括但不限于言论发表、传送等)而引起的一切责任，由用户负全部责任。<br />
4.3、煜龙教育的服务同大多数因特网产品一样，易受到各种安全问题的困扰，包括但不限于：<br />
         1）透露详细个人资料，被不法分子利用，造成现实生活中的骚扰；<br />
         2）哄骗、破译密码；<br />
         3）下载安装的其它软件中含有“特洛伊木马”等病毒，威胁到个人计算机上信息和数据的安全，继而威胁对本服务的使用。对于发生上述情况的，用户应当自行承担责任。<br />
4.4、用户须明白，煜龙教育为了服务整体运营的需要，有权在公告通知后修改或中断、中止或终止服务而不需通知您的权利，而无须向第三方负责或承担任何赔偿责任。<br />
4.5、用户理解，互联网技术的不稳定性，可能导致政府政策管制、病毒入侵、黑客攻击、服务器系统崩溃或者其他现今技术无法解决的风险发生可能导致煜龙教育服务中断或账号道具损失，用户对此非人为因素引起的损失由用户承担责任。<br />
                </p>
                 <p class="jieshao1">5、知识产权</p>
                <p class="jieshao">
5.1、煜龙教育的服务包括煜龙教育运营的网站、网页应用、软件以及内涵的文字、图片、视频、音频等元素，煜龙教育服务标志、标识以及专利权，煜龙教育对此享有上述知识产权。 <br />
5.2、用户不得对煜龙教育服务涉及的相关网页、应用、软件等产品进行反向工程、反向汇编、反向编译等。 <br />
5.3、用户使用煜龙教育服务只能在本《用户协议》以及相应的授权许可协议授权的范围使用煜龙教育知识产权，未经授权超范围使用的构成对煜龙教育的侵权。 <br />
5.4、用户在使用煜龙教育服务时发表上传的文字、图片、视频、软件以及表演等用户原创的信息，此部分信息的知识产权归用户，但用户的发表、上传行为是对煜龙教育服务平台的授权，用户确认其发表、上传的信息非独占性、永久性的授权，该授权可转授权。煜龙教育可将前述信息在煜龙教育旗下的服务平台上使用，可再次编辑后使用，也可以由煜龙教育授权给合作方使用。 <br />
5.5、若煜龙教育旗下业务平台内的信息以及其他用户上传、存储、传播的信息有侵犯的用户或第三人的知识产权的，煜龙教育网站提供投诉通道。 <br />
                </p>
                 <p class="jieshao1">6、隐私保护</p>
                <p class="jieshao">
6.1、请用户注意勿在使用煜龙教育服务中透露自己的各类财产帐户、银行卡、信用卡、第三方支付账户及对应密码等重要资料，否则由此带来的任何损失由用户自行承担。 <br />
6.2、用户的煜龙账号、密码属于保密信息，煜龙教育应当采取积极的措施保护用户账号、密码的安全。 <br />
6.3、用户的注册信息作为煜龙教育的商业秘密进来保护。但用户同时明白，互联网的开放性以及技术更新非常快，非煜龙教育可控制的因素导致用户泄漏的，煜龙教育不承担责任。 <br />
6.4、用户在使用煜龙教育服务时不可将自认为隐私的信息发表、上传至煜龙教育，也不可将该等信息通过煜龙教育的服务传播给其他人，若用户的行为引起的隐私泄漏，由用户承担责任。 <br />
6.5、煜龙教育在提供服务时可能会搜集用户信息，煜龙教育会明确告知用户，通常信息仅限于用户姓名、性别、年龄、出生日期、身份证号、家庭住址、教育程度、公司情况、所属行业、兴趣爱好等。 <br />
6.6、就下列相关事宜的发生，煜龙教育不承担任何法律责任： <br />
         1）煜龙教育根据法律规定或相关政府、司法机关的要求提供您的个人信息； <br />
         2）由于用户将用户密码告知他人或与他人共享注册账户，由此导致的任何个人信息的泄漏，或其他非因煜龙教育原因导致的个人信息的泄漏； <br />
         3）任何由于黑客攻击、电脑病毒侵入造成的信息泄漏； <br />
         4）因不可抗力导致的信息泄漏； <br />
                </p>
                 <p class="jieshao1">7、其他条款</p>
                <p class="jieshao">
7.1、本协议的签署地点为煜龙教育服务器所在地，若用户与煜龙教育发生争议的，双方同意将争议提交法院诉讼解决。 <br />
7.2、本协议由煜龙教育公布在网站上，对煜龙教育具有法律约束力；用户一经点击接受或者直接登录的行为视为对本协议的接受，对用户具有法律约束力。 <br />
7.3、煜龙教育旗下具体的网站、网页应用、软件等的使用由用户和煜龙教育的业务平台另行签署相关软件授权及服务协议。 <br />
                </p>
                 <p class="jieshao1">8、用户的个人隐私信息保护措施。</p>
                <p class="jieshao">
1、个人信息的搜集 <br />
当我们需要能识别您身份的信息或者通讯信息时，我们会征求您的同意。通常，在您注册煜龙通行证、煜龙账号时，我们会请求您提供这些信息。我们搜集的信息通常仅限于您的姓名、性别、年龄、出生日期、身份证号、家庭住址、教育程度、公司情况、所属行业、兴趣爱好等。 <br />
2、个人信息的使用 <br />
我们的产品可能在法律要求或符合《用户协议》、《煜龙游戏网服务条款》、《煜龙软件（网站）许可及服务协议》约定的情况下透露您的个人信息a、根据协议得到您的许可；b、在产品交互中得到您的许可；c、根据法律规定或政府、司法机关的要求；d、紧急情况下，在危及公共安全、其他个人更重要与您隐私的权利受到现实危险的。除此之外，我们不会向外界透漏您的隐私信息。 <br />
3、帐号的安全 <br />
您注册的煜龙账号的用户名、密码属于保密信息，我们将采取积极的技术措施和管理措施保护用户帐号、密码的安全。您尽可能按照我们提供的安全保护措施提升您帐号的安全性。 <br />
4、个人信息的安全 <br />
请您注意勿在使用我们的服务中透露您自己的各类财产帐户、银行卡、信用卡、第三方支付账户及对应密码等重要资料。 <br />
5、Cookie 的使用 <br />
我们使用Cookie来帮助您实现您的联机体验的个性化。Cookie是由网页服务器存放在您的硬盘中的文本文件。Cookie  <br />
不能用来运行程序或将病毒递送到您的计算机中。指定给您的Cookie 是唯一的，它只能由将Cookie发布给您的域中的Web服务器读取。 <br />
Cookie的主要用途之一是提供一种节约时间的实用功能。例如，如果您将网页个性化，或在欣瑞在线或欣瑞网站或服务上注册，Cookie会帮助您后续访问时调用您的特定信息。这样可以简化记录您的个人信息（例如帐单寄送地址、首选电子邮件地址等）的流程。当您返回到欣瑞在线或欣瑞网站时，网站可以调出您以前所提供的信息，使您能够容易地使用您自定义的功能。在进行与其产品及服务相关的工作时，会使用网络beacons进入我们的网站提取 Cookie。 <br />
您可以接受或拒绝Cookie。大多数Web浏览器会自动接受Cookie，但您通常可根据自己的需要来修改浏览器的设置以拒绝Cookie。如果选择拒绝Cookie，那么您可能无法完全体验所访问的网站的互动功能。 <br />
6、对青少年个人信息的搜集和使用 <br />
我们非常重视对青少年个人信息搜集和使用的安全性和保护。我们建议，任何16岁以下的未成年人参加网上活动应事先取得家长或其法定监护人（以下简称"监护人"）的同意。 <br />
未经监护人事先同意，我们不会使用青少年的个人信息，也不会向任何第三方透露可识别的信息，除非是法律的许可或为了向青少年提供服务之必要。 经监护人同意，我们可能搜集青少年的个人信息，但监护人有权拒绝我们进一步搜集其子女或被监护人的个人信息，有权审阅或要求我们删除该青少年的个人信息。 <br />
我们保证不会要求青少年提供额外的个人资料，以作为允许其参与网上活动的条件。 <br />
7、关于免责 <br />
发生下列事项导致用户信息或隐私信息泄漏的，我们不承担责任 <br />
（1）、由于法律政策的原因，或者由于政府、司法机关要求，导致您的信息被提供给相关单位。 <br />
（2）、由于您将用户密码告知他人或与他人共享注册帐户，由此导致的任何个人信息的泄漏；或其他因用户个人行为造成的泄漏。 <br />
（3）、任何由于黑客攻击、电脑病毒侵入、计算机系统崩溃造成的信息泄漏；发生前述事故，且该等事故现今的技术难以防御的。 <br />
（4）、紧急情况下，在危及公共安全、其他个人身体、财产安全情况下，因利益平衡做取舍时使用您的信息。若您因此权利收到损害的，您可以向收益人主张权利。 <br />
（5）不可抗力事件以及其他一切非我们主观过错而导致的使用或泄漏。
                </p>
              </a-modal>
              <!-- <br />
              <br /> -->
            </div>
          </div>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      visible: false,
      size: "default",
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: "",
      form: {
        names: "",
        numbers: "",
        regions: "",
        dates: "",
        educations: "",
        id_numbers: "",
        descs: "",
      },
      rules: {
        names: [
          {
            required: true,
            message: "请填写姓名",
            trigger: "blur",
          },
          {
            // pattern:/^[a-zA-Z]\w{3,15}$/ig,
            pattern:/^[\u4E00-\u9FA5]{2,4}$/,
            message: "请填写正确的姓名",
            trigger: "blur",
          },
        ],
        numbers: [
          {
            required: true,
            message: "请填写手机号",
            trigger: "blur",
          },
          {
            pattern:/^[1][3,4,5,7,8][0-9]{9}$/,
            message: "请填写正确的手机号",
            trigger: "blur",
          },
        ],
        regions: [
          {
            required: true,
            message: "请选择课程",
            trigger: "blur",
          },
          {
            min: 2,
            max: 5,
            message: "请选择课程",
            trigger: "blur",
          },
        ],
        dates: [
          {
            required: true,
            message: "请选择出生年月",
            trigger: "change",
          },
        ],
        educations: [
          {
            required: true,
            message: "请选择学历",
            trigger: "blur",
          },
          {
            min: 2,
            max: 5,
            message: "请选择学历",
            trigger: "blur",
          },
        ],
        id_numbers: [
          {
            required: true,
            message: "请填写身份证号",
            trigger: "blur",
          },
          {
            pattern:/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|30|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/,
            message: "请填写正确的身份证号",
            trigger: "blur",
          },
        ],
        descs: [
          {
            required: true,
            message: "请输入您的疑问",
            trigger: "change",
          },
        ],
      },
    };
  },
  
  methods: {
    
    onSubmit() {
      
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert("submit!");
          // console.log(this.form);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      axios.get("/cw", { params: { mod: "baoming" ,id:this.$route.query.id }}).then((res) => {
        // this.$router.push({
        //  name: "space",
         
        // })
        res.data=[...res.data,this.form]
        console.log(res)
          
       
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    submit() {
      console.log(this.value);
    },
    showModal() {

      this.visible = true;

    },
    hideModal() {
      this.visible = false;
    },
    confirm() {
      this.$confirm({
        title: "Confirm",
        content: "Bla bla ...",
        okText: "确认",
        cancelText: "取消",
      });
    },
  },
};
</script>
<style >
.ant-modal-wrap {
  height: 6.53rem;
}
</style>
<style lang='scss' scoped>


.aviation_text {
  border-radius: 0.04rem;
  // margin: 0 0.1rem;
  width: 3.55rem;
  margin: 0 0.1rem;
  margin-top: 0.15rem;
  margin-bottom: 0.3rem;
  overflow: hidden;
  background-color: #fff;
  .aviation_text_header {
    a {
      display: flex;
      border: 0;
      height: 0.55rem;
      img {
        width: 100%;
      }
    }
  }
  ::v-deep .ant-form-item-control {
    display: flex;
    flex-direction: column;
    width: 3.55rem;
  }
  .aviation_text_content {
    display: flex;
    flex-direction: column;
    padding-top: 0.15rem;
    .aviation_text_input {
      display: flex;
      // justify-content: center;
      align-items: center;
      margin-bottom: 0.1rem;
      .span {
        width: 0.8rem;
        line-height: 0.35rem;
        color: #454444;
        margin-left: 0.3rem;
        em {
          color: #e76888;
        }
      }
      .ant-calendar-picker {
        width: 2rem;
      }
      input {
        // width: 2.52rem;
        width: 2rem;
        border-radius: 0;
        height: 0.35rem;
        color: #000;
      }
    }
    .aviation_textarea {
      display: flex;
      span {
        width: 0.75rem;
        height: 0.35rem;
        font-family: PingFang-SC-Medium;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        // color: #333333;
        padding-left: 0.05rem;
        line-height: 0.35rem;
        color: #454444;
        margin-left: 0.3rem;
      }
      .aviation_textarea_text {
        border: 1px solid #cbcbcb;
        width: 2rem;
        textarea {
          width: 1.75rem;
          height: 0.63rem;
          border-radius: 0.01rem;
          padding-left: 0.14rem;
          padding-top: 0.11rem;
          border: none;
          outline: none;
          resize: none;
        }
        textarea::-webkit-input-placeholder {
          /* WebKit browsers*/
          color: #cbcbcb;
        }
      }
    }
    .aviation_text_cascader {
      display: flex;
      // justify-content: center;
      //   align-items: center;
      margin-bottom: 0.1rem;
      .span {
        width: 0.8rem;
        // text-align: center;
        line-height: 0.35rem;
        color: #454444;
        margin-left: 0.3rem;
        em {
          color: #e76888;
        }
      }
      .ant-cascader-picker {
        width: 2rem;
      }
      .from_three {
        position: relative;
        height: 0.35rem;
        .ant-select-selection-selected-value {
          display: inline-block !important;
          padding-left: 0.05rem;
          color: #000 !important;
        }
      }
    }
    .bottom_jick {
      margin-top: 0.15rem;
      .aviation_text_button {
        background: #1d6da5;
        width: 2.73rem;
        height: 0.44rem;
        display: block;
        // margin: 0.1rem 0.5rem 0 0.5rem;
        margin: 0 auto;
        line-height: 0.44rem;
        text-align: center;
        font-size: 0.18rem;
        color: #e8ffff;
      }
      .submit-size {
        height: 0.13rem;
        text-align: center;
        padding-bottom: 0.15rem;
        display: block;
        // padding: 0 0 0.03rem 0;
        padding-top: 0.05rem;
        font-family: PingFang-SC-Medium;
        font-weight: normal;
        font-stretch: normal;
        line-height: 18px;
        letter-spacing: 0px;
        color: #888888;
        
      }
    }
  }
}
::v-deep .ant-select-selection {
  border-radius: 0 !important;
  z-index: 99;
  font-size: 14px;
  padding-left: 0.05rem;
}
::v-deep .ant-select-selection--single {
  height: 0.35rem;
  i {
    svg {
      width: 10px;
      height: 9px;
      font-family: PingFang-SC-Medium;
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 18px;
      letter-spacing: 0px;
      color: #888888;
    }
  }
}
::v-deep .ant-select-selection__rendered {
  line-height: 0.35rem;
}
::v-deep .ant-calendar-picker-input {
  height: 0.35rem;
}
::v-deep .ant-input {
  height: 0.35rem;
  display: inline-block;
  padding-left: 0.15rem;
  color: #000;
  margin-right: 0.38rem;
  border-radius: 0;
}
.ant-form-item {
  margin: 0;
}
::v-deep .ant-col-offset-4 {
  margin: 0 !important;
}
::v-deep .ant-form-explain {
  text-align: center;
  padding-left: 0.25rem;
  padding-bottom: 0.05rem;
}
.ant-modal-body{
  width: 100%;
  display: flex;
  justify-content: center;
  .title_cent{
    margin-left: 0.5rem;
  }
  .jieshao1{
    width: 100%;
    color:#000;
    margin: .2rem 0;
  }
  .jieshao{
    width: 100%;
    color:#000;
  }
}

.zhengkuai{
  width: 100%;
  height: 5rem;
}
</style>