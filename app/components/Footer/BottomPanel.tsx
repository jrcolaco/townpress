
'use client';

export default function BottomPanel() {
  return (
    <div id="bottom-panel">
      <div className="bottom-panel-inner">
        <div className="row">
          <div className="col-md-3">
            <div className="widget">
              <hr className="c-separator m-transparent hidden-lg hidden-md" />
              <div className="widget-inner">
                <h3 className="widget-title">About TownPress</h3>
                <div className="widget-content">
                  <p>TownPress is a premium Municipality HTML template. It is best suited to be used as a presentation site for small towns or villages.</p>
                  <p>
                    You can buy this responsive HTML template on{' '}
                    <a href="http://themeforest.net/user/LSVRthemes/portfolio" target="_blank" rel="noreferrer">ThemeForest</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="widget-col col-md-3">
            <div className="widget definition-list-widget">
              <hr className="c-separator m-transparent hidden-lg hidden-md" />
              <div className="widget-inner">
                <h3 className="widget-title m-has-ico"><i className="widget-ico tp tp-telephone" />Phone Numbers</h3>
                <div className="widget-content">
                  <dl>
                    <dt>Town Clerk</dt><dd>(123) 456-7890</dd>
                    <dt>State Police</dt><dd>(123) 456-7891</dd>
                    <dt>Fire Department</dt><dd>(123) 456-7892</dd>
                  </dl>
                  <p className="show-all-btn"><a href="/phone-numbers.html">See All Phone Numbers</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="widget-col col-md-3">
            <div className="widget mailchimp-subscribe-widget">
              <hr className="c-separator m-transparent hidden-lg hidden-md" />
              <div className="widget-inner">
                <h3 className="widget-title m-has-ico"><i className="widget-ico tp tp-at-sign" />Join Our Newsletter</h3>
                <div className="widget-content">
                  <form className="mailchimp-subscribe-form" method="get" action="http://lsvr.us14.list-manage.com/subscribe/post-json?u=8291218baaf54ddfd7dbc6016&id=f3e5d696dc&c=?">
                    <div className="subscribe-inner">
                      <div className="description"><p>Join our newsletter to receive up to date news about our municipality.</p></div>
                      <p className="c-alert-message m-warning m-validation-error" style={{ display: 'none' }}>
                        <i className="ico fa fa-exclamation-circle" /><span>Your email address is required.</span>
                      </p>
                      <p className="c-alert-message m-warning m-request-error" style={{ display: 'none' }}>
                        <i className="ico fa fa-exclamation-circle" /><span>There was a connection problem. Try again later.</span>
                      </p>
                      <p className="c-alert-message m-success" style={{ display: 'none' }}>
                        <i className="ico fa fa-check-circle" /><span><strong>Form sent successfully!</strong></span>
                      </p>
                      <div className="form-fields">
                        <input type="text" placeholder="Your Email Address" name="EMAIL" className="m-required m-email" />
                        <button title="Subscribe" type="submit" className="submit-btn">
                          <i className="fa fa-chevron-right" />
                          <i className="fa fa-spinner fa-spin" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="widget-col col-md-3">
            <div className="widget">
              <hr className="c-separator m-transparent hidden-lg hidden-md" />
              <div className="widget-inner">
                <h3 className="widget-title m-has-ico"><i className="widget-ico tp tp-envelope" />Town Hall Address</h3>
                <div className="widget-content">
                  <p>P.O. Box 123 TownPress<br />VT 12345</p>
                  <p>
                    Phone: (123) 456-7890<br />Fax: (123) 456-7891<br />
                    Email: <a href="mailto:townhall@townpress.gov">townhall@townpress.gov</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
