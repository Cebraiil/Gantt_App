// made by Ayman jibrael on 01/05/2023
// Made using syncfusion component.
// github account : https://github.com/aymanjibrael

import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { TreeViewComponent, ToolbarComponent, 
        ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';
import Gantt from './Gantt';

function ResponsivePanel() {
    let sidebarobj: SidebarComponent;
    let data: { [key: string]: Object }[] = [
        {
            nodeId: '01', nodeText: 'Installation', iconCss: 'icon-microchip icon',
        },
        {
            nodeId: '02', nodeText: 'Deployment', iconCss: 'icon-thumbs-up-alt icon',
        },
        {
            nodeId: '03', nodeText: 'Quick Start', iconCss: 'icon-docs icon',
        },
        {
            nodeId: '04', nodeText: 'Components', iconCss: 'icon-th icon',
            nodeChild: [
                { nodeId: '04-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon' }
            ]
        },
        {
            nodeId: '05', nodeText: 'API Reference', iconCss: 'icon-code icon',
            nodeChild: [
                { nodeId: '05-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon' }
            ]
        },
        {
            nodeId: '06', nodeText: 'Browser Compatibility', iconCss: 'icon-chrome icon'
        },
        {
            nodeId: '07', nodeText: 'Upgrade Packages', iconCss: 'icon-up-hand icon'
        },
        {
            nodeId: '08', nodeText: 'Release Notes', iconCss: 'icon-bookmark-empty icon'
        },
        {
            nodeId: '09', nodeText: 'FAQ', iconCss: 'icon-help-circled icon'
        },
        {
            nodeId: '10', nodeText: 'License', iconCss: 'icon-doc-text icon'
        }
    ];

    const width: string = '290px';
    const target: string = '.main-sidebar-content';
	const mediaQuery: string = '(min-width: 600px)';
    const fields: object = { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: "iconCss" };
    let folderEle: string = '<div class= "e-folder"><div class= "e-folder-name"><img style="width: 30px" src="https://www.svgrepo.com/show/459086/menu.svg"></img></div></div>';
    return (
        <div className="control-section" id="responsive-wrapper">                
            <div id="reswrapper">
                {/* header-section  declaration */}
                <div>
                    <ToolbarComponent id="resToolbar" clicked={toolbarCliked.bind(arguments)}>
                        <ItemsDirective>
                            <ItemDirective template={folderEle}></ItemDirective>
                        </ItemsDirective>
                    </ToolbarComponent>
                </div>
                {/* end of header-section */}
                <SidebarComponent id="sideTree" className="sidebar-treeview" ref={Sidebar => (sidebarobj as any) = Sidebar} width={width} target={target} mediaQuery={mediaQuery} isOpen={true}>
                    <div className='res-main-menu'>
                        <br/>
                        <div>
                            <TreeViewComponent id='mainTree' cssClass="main-treeview" fields={fields} expandOn='Click'/>
                        </div>
                    </div>
                </SidebarComponent>
                {/* end of sidebar element */}
                {/* .main-sidebar-content declaration */}
                <div className="main-sidebar-content" id="main-text">
                    <div className="sidebar-content">
                        <Gantt />
                        <div className='text-main'>
                            <h1>Welcome to Gantt chart</h1>
                            <h4>Made by Ayman Jibrael </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    //toggle the sidebar
    function toolbarCliked(): void {
        sidebarobj.toggle();
    }
}
export default ResponsivePanel;