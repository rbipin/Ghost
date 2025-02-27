import DataProvider from './components/providers/DataProvider';
import ExitSettingsButton from './components/ExitSettingsButton';
import Heading from './admin-x-ds/global/Heading';
import NiceModal from '@ebay/nice-modal-react';
import RoutingProvider from './components/providers/RoutingProvider';
import Settings from './components/Settings';
import Sidebar from './components/Sidebar';
import {GlobalDirtyStateProvider} from './hooks/useGlobalDirtyState';
import {OfficialTheme} from './models/themes';
import {ServicesProvider} from './components/providers/ServiceProvider';
import {Toaster} from 'react-hot-toast';

interface AppProps {
    ghostVersion: string;
    officialThemes: OfficialTheme[];
}

function App({ghostVersion, officialThemes}: AppProps) {
    return (
        <ServicesProvider ghostVersion={ghostVersion} officialThemes={officialThemes}>
            <DataProvider>
                <RoutingProvider>
                    <GlobalDirtyStateProvider>
                        <div className="admin-x-settings h-[100vh] w-full overflow-y-auto" id="admin-x-root" style={{
                                height: '100vh',
                                width: '100%'
                            }}
                        >
                            <Toaster />
                            <NiceModal.Provider>
                                <div className='fixed left-6 top-4 z-20'>
                                    <ExitSettingsButton />
                                </div>

                                {/* Main container */}
                                <div className="mx-auto flex max-w-[1080px] flex-col px-[5vmin] py-[12vmin] md:flex-row md:items-start md:gap-x-10 md:py-[8vmin]" id="admin-x-settings-content">

                                    {/* Sidebar */}
                                    <div className="relative z-20 min-w-[260px] grow-0 md:fixed md:top-[8vmin] md:basis-[260px]">
                                        <div className='h-[84px]'>
                                            <Heading>Settings</Heading>
                                        </div>
                                        <div className="relative mt-[-32px] w-[260px] overflow-x-hidden after:absolute after:inset-x-0 after:top-0 after:block after:h-[40px] after:bg-gradient-to-b after:from-white after:to-transparent after:content-['']">
                                            <Sidebar />
                                        </div>
                                    </div>

                                    <div className="relative flex-auto pt-[3vmin] md:ml-[300px] md:pt-[85px]">
                                        <div className='pointer-events-none fixed inset-x-0 top-0 z-[5] h-[130px] bg-gradient-to-t from-transparent to-white to-60%'></div>
                                        <Settings />
                                    </div>
                                </div>
                            </NiceModal.Provider>
                        </div>
                    </GlobalDirtyStateProvider>
                </RoutingProvider>
            </DataProvider>
        </ServicesProvider>
    );
}

export default App;
