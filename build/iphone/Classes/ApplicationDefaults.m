/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"bgRgvvA3xN8J5FFLANnydV2EZFlYpLBL"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"KvdtRN2Swl67OFG2FMeLuMyKwn5lVLwb"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"fgkGOwt249KFlFMzkBO17rv8H4ZC6ftb"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"Pdow03MkRRgrjEt9EgdpPfDEBmaXHTkV"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"DPpraN3HT7Q0DObp6OKFJ7SUyQbSRyyE"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"ts465YPuIW58lxZ3jxzQu4USMIajZYHE"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
