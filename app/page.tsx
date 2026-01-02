
import Header from '@/app/components/Header/Header';
import Directory from '@/app/components/Directory/Directory';
import PostList from '@/app/components/Posts/PostList';
import SideMenu from '@/app/components/SideMenu/SideMenu';

import DocumentsWidget from '@/app/components/Widgets/DocumentsWidget';
import LocaleInfoWidget from '@/app/components/Widgets/LocaleInfoWidget';
import FeaturedGalleryWidget from '@/app/components/Widgets/FeaturedGalleryWidget';
import NoticesWidget from '@/app/components/Widgets/NoticesWidget';
import ImageWidget from '@/app/components/Widgets/ImageWidget';
import EventsWidget from '@/app/components/Widgets/EventsWidget';

import Footer from '@/app/components/Footer/Footer';
import BottomPanel from '@/app/components/Footer/BottomPanel';

import { directoryItems } from '@/app/data/directory';
import { posts } from '@/app/data/posts';
import { documents } from '@/app/data/documents';
import { localeInfo } from '@/app/data/locale';
import { featuredGallery, footerLinks } from '@/app/data/footer';
import { notices } from '@/app/data/notices';
import { events } from '@/app/data/events';
import type { NavItem } from '@/app/types';

// Top header nav mirrors the left side-menu structure
const headerNav: NavItem[] = [
  {
    label: 'Home',
    href: '/index.html',
    children: [
      { label: 'Home 1', href: '/index.html' },
      { label: 'Home 2', href: '/home-2.html' },
    ],
  },
  {
    label: 'Government',
    href: '/town-hall.html',
    children: [
      { label: 'Town Hall', href: '/town-hall.html' },
      { label: 'Town Council', href: '/town-council.html' },
      { label: 'Phone Numbers', href: '/phone-numbers.html' },
      { label: 'Documents', href: '/document-list.html' },
      { label: 'Write To Mayor', href: '/contact.html' },
    ],
  },
  {
    label: 'Community',
    href: '/post-list.html',
    children: [
      { label: 'News', href: '/post-list.html' },
      { label: 'Notices', href: '/notice-list.html' },
      { label: 'Events', href: '/event-list.html' },
      { label: 'Galleries', href: '/gallery-list.html' },
    ],
  },
  {
    label: 'Pages',
    href: '/statistics.html',
    children: [
      { label: 'Statistics', href: '/statistics.html' },
      { label: 'Virtual Tour', href: '/virtual-tour.html' },
      { label: 'Town History', href: '/town-history.html' },
      { label: 'Elements', href: '/elements.html' },
    ],
  },
];

export default function Page() {
  return (
    <>
      <Header
        nav={headerNav}
        imgSlides={['/images/header-01.jpg'/*, '/images/header-02.jpg'*/]}
        gmapAddress="Main St, Stowe, VT 05672, USA"
      />
      <div id="core">
        <div className="c-container">
          <div className="row">
            <div className="middle-column col-md-6 col-md-push-3">
              <div id="page-header">
                <div className="page-title">
                  <h1>Welcome to TownPress,<br /><em>the Most Exciting Town of Northeast!</em></h1>
                </div>
              </div>
              <div id="page-content">
                <div className="page-content-inner">
                  <Directory items={directoryItems} />
                  <PostList posts={posts} />
                </div>
              </div>
              <hr className="c-separator m-margin-top-small m-margin-bottom-small m-transparent hidden-lg hidden-md" />
            </div>
            <div className="left-column col-md-3 col-md-pull-6">
              <SideMenu
                items={[
                  headerNav[0],
                  headerNav[1],
                  headerNav[2],
                  headerNav[3],
                ]}
              />
              <aside className="sidebar">
                <div className="widget-list">
                  <DocumentsWidget docs={documents} />
                  <LocaleInfoWidget info={localeInfo} />
                  <FeaturedGalleryWidget gallery={featuredGallery} />
                </div>
              </aside>
            </div>
            <div className="right-column col-md-3">
              <aside className="sidebar">
                <div className="widget-list">
                  <NoticesWidget notices={notices} />
                  <ImageWidget />
                  <EventsWidget events={events} />
                </div>
              </aside>
            </div>

          </div>
        </div>
      </div>
      <Footer links={footerLinks} />
    </>
  );
}
